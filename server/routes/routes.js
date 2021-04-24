const businessRoutes = require('./businesses');

const appRouter = (app, fs) => {
  businessRoutes(app, fs);
};

module.exports = appRouter;
