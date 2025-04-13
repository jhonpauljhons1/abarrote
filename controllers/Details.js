const knex = require('../knex');

const obtenerDetalles = async (req, res) => {
  try {
    const detalles = await knex('details').select('*');
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los detalles de venta' });
  }
};

const agregarDetalle = async (req, res) => {
  const nuevoDetalle = req.body;
  try {
    const [detalle] = await knex('details').insert(nuevoDetalle).returning('*');
    res.status(201).json(detalle);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el detalle de venta' });
  }
};

module.exports = {
  obtenerDetalles,
  agregarDetalle
};
