const knex = require("../database-connection");

module.exports = {
    list(){
      return knex('posting_info')
    },
    read(id){
      return knex('posting_info').where('id', id).first()
    },
    create(posting_info){
      return knex('posting_info').insert(posting_info).returning('*')
        .then (record => record[0])
    },
    update(id, posting_info){
      return knex('posting_info').update(posting_info).where('id', id).returning('*')
        .then(record => record[0])
    },
    delete(id){
      return knex('posting_info').delete().where('id', id);
    }
};
