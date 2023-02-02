const asyncHandeler = require('express-async-handler')
const PersonalSchema = require('../model/PersonalSchema')


const createtask = asyncHandeler(async (req, res) => {
    const { task, money, date, total } = req.body
    // const setdate = 
    if (date) {
        new Date(date)
    }
    console.log(date);
    const userCreate = await PersonalSchema.create({
        task,
        money,
        total,

    })


    if (userCreate) {
        res.status(200).json({
            user: userCreate,
            date
        })

    } else {
        res.status(400).json({ massage: "pleace fill tha value" })
    }


    res.status(200).json({ massage: "success" })
})

const getPerson = asyncHandeler(async (req, res) => {
    const { total } = req.body
    const user = await PersonalSchema.find()

    res.status(200).json({ user })
})

const deletepersonal = asyncHandeler(async (req, res) => {
    const del = await PersonalSchema.findById(req.params.id)
    if (!del) {
        res.status(400).json({ massage: "error" })
    }
    await del.remove()
    res.status(200).json({ id: req.params.id })
})
const editpersonal = asyncHandeler(async (req, res) => {
    const edit = await PersonalSchema.findById(req.params.id)
    if (!edit) {
        res.status(400).json({ massage: "error" })
    }
    const update = await PersonalSchema.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    // await del.remove()
    res.status(200).json(update)
})

const getOne = asyncHandeler(async (req, res) => {
    const products = await PersonalSchema.findById(req.params.id)
    if (!products) {
        res.status(400)
        throw new Error(' Product not get')

    }
    res.status(201).json({
        products
    })
})


module.exports = {
    createtask,
    getPerson,
    deletepersonal,
    editpersonal,
    getOne
}