const express = require('express');
const routes = express.Router();

const CellPhoneController = require('./controllers/CellPhoneController');

routes.get('/cellPhones', CellPhoneController.index);
routes.get('/cellPhones/:id', CellPhoneController.show);
routes.post('/cellPhones', CellPhoneController.store)
routes.put('/cellPhones/:id', CellPhoneController.update);
routes.delete('/cellPhones/:id', CellPhoneController.destroy);

module.exports = routes;