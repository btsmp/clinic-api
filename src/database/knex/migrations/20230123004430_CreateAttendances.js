exports.up = knex => knex.schema.createTable("attendances", table => {
  table.increments("id");
  table.integer("user_id").references('id').inTable('users');
  table.integer("service_id").references('id').inTable('services');

  table.timestamp("start_date").default(knex.fn.now());
  table.timestamp("end_date").default(knex.fn.now());
})

exports.down = knex => knex.schema.dropTable("attendances");
