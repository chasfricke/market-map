exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', table => {
    table.increments('id').primary()
    table.string('name', 60)
    table.string('business_type', 60)
    table.string('address', 60)
    table.float('latitude')
    table.float('longitude')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('locations')

};
