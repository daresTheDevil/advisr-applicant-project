function average(c) {
  var total = 0;
  for (var i = 0; i < c.length; i++) {
    total += c[i].budget;
  }
  var avg = total / c.length;
  if (c.length == 0) {
    return 0;
  }

  return avg;
}

const businessRoutes = (app, fs) => {
  // variables
  const dataPath = './data/business-list.json';

  // GET all businesses
  app.get("/businesses", async (req, res) => {
    // read json file and stringify
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      // parse json string into array
      var businesses = JSON.parse(data)

      // loop each business, get an average spend, get a campaign count and drop list of campaigns
      // dropping campaigns isn't necessary, but you COULD theoretically have a business with
      // thousands of campaigns that we don't really need in the output for the businesses page
      businesses.forEach(business => {
        business.average_campaign_budget = average(business.campaigns)
        business.number_of_campaigns = business.campaigns.length
        // drop campaigns...normally this would be done through ORM but we're reading
        // from JSON file so this is quick and dirty
        business.campaigns = undefined
      });
  	  res.json(businesses);
    });
  });

  // GET one food identified by id
  app.get("/business/:id", async (req, res) => {
  	const businessId = Number(req.params.id);
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      const collection = JSON.parse(data)
      const business = collection.find(i => i.id === businessId);
      
      business.average_campaign_budget = average(business.campaigns)
      business.number_of_campaigns = business.campaigns.length
      res.json(business);
    });
  });
};

module.exports = businessRoutes;
