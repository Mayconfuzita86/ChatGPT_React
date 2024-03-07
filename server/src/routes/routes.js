const express = require("express")
const prontoController = require("../controllers/prompt-controller")
const routes = express.Router()

routes.post('api/prompt', prontoController.sendText)

module.exports = routes