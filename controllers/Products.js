const knex = require('../knex');

const obtenerProductos = async (req, res) => {
  try {
    const productos = await knex('products').select('*');
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error })
  }
};

const crearProducto = async (req, res) => {
  const nuevoProducto = req.body;
  try {
    const [producto] = await knex('products').insert(nuevoProducto).returning('*');
    res.status(201).json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

module.exports = {
  obtenerProductos,
  crearProducto
};
