
exports.up = function(knex) {
  return knex.schema
    .createTable('options', async function (table) {
      table.increments('id');
      table.string('title');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('options')
};
