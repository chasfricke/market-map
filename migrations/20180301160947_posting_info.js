exports.up = function(knex, Promise) {
  return knex.schema.createTable('posting_info', table => {
    table.increments('id').primary()
    table.dateTime('posting_date')
    table.string('posting_type', 60)
    table.string('posting_occasion', 60)
    table.string('contact_name', 60)
    table.string('contact_title', 60)
    table.text('notes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posting_info')
};
