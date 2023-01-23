const authConfig = require("../configs/auth")
const knex = require("../database/knex")
const { sign } = require("jsonwebtoken")
const { compare } = require("bcryptjs")

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body

    const user = await knex("users").where({ email }).first()

    if (!user) {
      response.status(401).json("Email e/ou senha incorreta")
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      response.status(401).json("Email e/ou senha incorreta")
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    })

    return response.json({ user, token })
  }
}

module.exports = SessionsController