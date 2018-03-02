const database = require("./database-connection");

module.exports = {
    list(){
      return database('marketmap')
    },
    read(id){
      return database('marketmap').where('id', id).first()
    },
    create(marketmap){
      return database('marketmap').insert(marketmap).returning('*')
        .then (record => record[0])
    },
    update(id, marketmap){
      return database('marketmap').update(marketmap).where('id', id).returning('*')
        .then(record => record[0])
    },
    delete(id){
      return database('marketmap').delete().where('id', id);
    }
};
