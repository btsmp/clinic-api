const { Router } = require("express")
const AttendancesController = require("../controllers/AttendancesController")

const attendancessController = new AttendancesController()

const attendancesRouter = Router()

attendancesRouter.post("/", attendancessController.create)
attendancesRouter.put("/", attendancessController.update)
attendancesRouter.get("/", attendancessController.show)

module.exports = attendancesRouter 