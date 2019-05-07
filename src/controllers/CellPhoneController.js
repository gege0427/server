const mongoose = require('mongoose');

const CellPhone = mongoose.model('CellPhone');

module.exports = {
  async index(req, res) {
    
    const cellPhone = await CellPhone.find({});

    return res.json(cellPhone);
  },

  async show(req, res) {
    const cellPhone = await CellPhone.findById(req.params.id);

    return res.json(cellPhone);
  },

  async store(req, res) {
    const cellPhone = await CellPhone.create(req.body);
    
    return res.json(cellPhone);
  },

  async update(req, res) {
    const cellPhone = await CellPhone.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(cellPhone);
  },

  async destroy(req, res) {
    await CellPhone.findByIdAndRemove(req.params.id);

    return res.send();
  }
};