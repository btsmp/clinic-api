const { hash } = require("bcryptjs");
const knex = require("../database/knex");

class UsersController {
  // Create - POST para poder criar um registro
  async create(request, response) {
    const { name, password, email, isProfessional } = request.body;

    const userExists = await knex("users").where({ email }).first();

    if (userExists) {
      return response.status(400).json('Usuário já cadastrado');
    }
    const hashedPassword = await hash(password, 8);

    await knex("users").insert({
      email,
      name,
      password: hashedPassword,
      isProfessional
    });

    return response.status(201).json("Usuário criado com sucesso!");
  }
}

module.exports = UsersController;