const knex = require('../knex');

const obtenerClientes = async (req, res) => {
  try {
    const clientes = await knex('customer').select('*');
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los clientes' });
  }
};

const crearCliente = async (req, res) => {
  const nuevoCliente = req.body;
  try {
    const [cliente] = await knex('customer').insert(nuevoCliente).returning('*');
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el cliente' });
  }
};

module.exports = {
  obtenerClientes,
  crearCliente
};
