const mongoose = require('mongoose');

const CellPhoneSchema = new mongoose.Schema({
  nameUser: {
    type: String,
    required: true,
  },
  IMEI: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model('CellPhone', CellPhoneSchema);