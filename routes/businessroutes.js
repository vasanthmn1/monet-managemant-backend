const express = require("express")
const { createtask, deletepersonal, getPerson, editpersonal, getOne } = require("../controller/businesscontroller")
const route = express.Router()

// route.post('/business ', createtask)
route.post('/business', createtask)
route.get('/business', getPerson)
route.get('/business/:id', getOne)
route.put('/business/:id', editpersonal)
route.delete('/business/:id', deletepersonal)
module.exports = route