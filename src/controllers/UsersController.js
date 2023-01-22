const { hash } = require("bcryptjs");
const knex = require("../database/knex");

class UsersController {
  /* 
  Create - POST para poder criar um registro
  Update - PUT para atualizar um registro
  Index - GET para listar varios registros
  Show - GET para exibir um registro especifico
  Delete - DELETE para remover um registro
  */

  async create(request, response) {
    const { name, password, email } = request.body;

    const userExists = await knex("users").where({ email }).first();

    if (userExists) {
      return response.status(400).json('Usuário já cadastrado');
    }
    const hashedPassword = await hash(password, 8);

    await knex("users").insert({
      email,
      name,
      password: hashedPassword
    });

    return response.status(201).json("Usuário criado com sucesso!");
  }
}

module.exports = UsersController;