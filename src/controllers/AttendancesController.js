const knex = require("../database/knex");

class AttendancesController {

  async create(request, response) {
    const { service_id } = request.body
    const user_id = request.user.id

    const attendance = await knex('attendances').insert({
      user_id,
      service_id,
    })

    return response.status(201).json({ attendance })
  }

  async update(request, response) {
    const { id } = request.body
    console.log(id)

    const attendanceExists = await knex('attendances').where({ id }).first()

    if (!attendanceExists) {
      return response.status(400).json('atendimento não encontrado')
    }

    await knex('attendances').where({ id }).update({ end_date: knex.fn.now() })
    return response.json('Atendimento terminado!')
  }

  async show(request, response) {
    const { id } = request.body

    const attendance = await knex('attendances').where({ id }).first()

    if (!attendance) {
      return response.status(400).json('atendimento não encontrado')
    }

    return response.json({ attendance })
  }
}

module.exports = AttendancesController