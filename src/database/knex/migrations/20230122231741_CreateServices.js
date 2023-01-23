exports.up = knex => knex.schema.createTable("services", table => {
  table.increments("id");
  table.text("name");
  table.text("description");
  table.text("price");
  table.text("duration");
  table.text("comission");

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
})

exports.down = knex => knex.schema.dropTable("services");
