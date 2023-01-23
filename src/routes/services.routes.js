const { Router } = require("express")
const ServicesController = require("../controllers/ServicesController")

const servicesController = new ServicesController()

const servicesRouter = Router()

servicesRouter.post("/", servicesController.create)
servicesRouter.get("/", servicesController.index)
servicesRouter.get("/:id", servicesController.show)

module.exports = servicesRouter 