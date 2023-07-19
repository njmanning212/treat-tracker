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

module.exports = {
  create,
}