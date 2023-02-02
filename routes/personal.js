const express = require("express")
const { createtask, getPerson, deletepersonal, editpersonal, getOne } = require("../controller/personalController")
const route = express.Router()

route.post('/personal', createtask)
route.get('/personal', getPerson)
route.get('/personal/:id', getOne)
route.delete('/personal/:id', deletepersonal)
route.put('/personal/:id', editpersonal)

module.exports = route