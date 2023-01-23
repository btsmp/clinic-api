const { Router } = require("express");

const usersRouter = require("./users.routes");
const sessionsRoutes = require("./sessions.routes");
const servicesRouter = require("./services.routes");
const attendancesRouter = require("./attendances.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRoutes);
routes.use("/services", servicesRouter);
routes.use("/attendances", attendancesRouter);

module.exports = routes;