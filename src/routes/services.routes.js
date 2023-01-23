const { Router } = require("express");
const ServicesController = require("../controllers/ServicesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const servicesController = new ServicesController();

const servicesRouter = Router();

servicesRouter.use(ensureAuthenticated);
servicesRouter.post("/", servicesController.create);
servicesRouter.get("/", servicesController.index);
servicesRouter.get("/:id", servicesController.show);

module.exports = servicesRouter;