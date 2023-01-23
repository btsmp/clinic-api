const knex = require("../database/knex");

class ServicesController {
  // Create - POST para poder criar um registro
  // Show - GET para exibir um registro especifico
  // Index - GET para listar varios registros

  async create(request, response) {
    const { name, description, price, duration, comission } = request.body;

    await knex("services").insert({
      name,
      description,
      price,
      duration,
      comission
    });

    return response.status(201).json("Serviço criado com sucesso!");
  };

  async index(request, response) {
    const services = await knex("services").orderBy('id');
    return response.json(services);
  }

  async show(request, response) {
    const { id } = request.params

    const service = await knex('services').where({ id }).first()

    if (!service) {
      return response.status(400).json('Nota não encontrada.')
    }

    return response.json(service)

  }
}

module.exports = ServicesController;