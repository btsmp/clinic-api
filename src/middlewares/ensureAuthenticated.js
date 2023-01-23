const authConfig = require("../configs/auth")
const { verify } = require("jsonwebtoken")

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.status(401).json('JWT token não informado')
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret)

    request.user = {
      id: Number(user_id)
    }

    return next()
  } catch {
    return response.status(401).json('JWT token inválido')
  }
}

module.exports = ensureAuthenticated