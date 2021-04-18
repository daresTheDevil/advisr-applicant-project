const businessRoutes = require('./businesses');

const appRouter = (app, fs) => {
  // app.get('/', (req, res) => {
  //   // res.send('welcome to the test server');
  //   res.sendFile(__dirname + '/public/index.html')
  // });

  businessRoutes(app, fs);
};

module.exports = appRouter;
