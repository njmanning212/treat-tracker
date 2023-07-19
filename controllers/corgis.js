const {Corgi} = require('../models')

const create = async (req, res) => {
  try {
    const corgi = await Corgi.create(req.body)
    res.status(201).json(corgi)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const corgis = await Corgi.findAll()
    res.status(200).json(corgis)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const show = async (req, res) => {
  try {
    const corgi = await Corgi.findByPk(req.params.id)
    res.status(200).json(corgi)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  show,
}