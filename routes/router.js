const express = require('express');
const router = express.Router();

// Importar los controladores
const customerController = require('../controllers/Customer');
const productsController = require('../controllers/Products');
const salesController = require('../controllers/Sales');
const detailsController = require('../controllers/Details');

// Rutas para Clientes
router.get('/clientes', customerController.obtenerClientes);
router.post('/clientes', customerController.crearCliente);

// Rutas para Productos
router.get('/productos', productsController.obtenerProductos);
router.post('/productos', productsController.crearProducto);

// Rutas para Ventas
router.get('/ventas', salesController.obtenerVentas);
router.post('/ventas', salesController.crearVenta);

// Rutas para Detalles de Ventas
router.get('/detalles', detailsController.obtenerDetalles);
router.post('/detalles', detailsController.agregarDetalle);

module.exports = router;
