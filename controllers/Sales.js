const knex = require('../knex');

const obtenerVentas = async (req, res) => {
  try {
    const ventas = await knex('sales').select('*');
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las ventas' });
  }
};

const crearVenta = async (req, res) => {
  const nuevaVenta = req.body;
  try {
    const [venta] = await knex('sales').insert(nuevaVenta).returning('*');
    res.status(201).json(venta);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la venta' });
  }
};

module.exports = {
  obtenerVentas,
  crearVenta
};
