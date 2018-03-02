exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posting_info').del()
    .then(function () {
      // Inserts seed entries
      return knex('posting_info').insert([
        {id: 1, posting_date: '01/15/17', posting_type: 'poster', posting_occasion: 'general', contact_name: 'NA', contact_title: 'NA', notes: 'Poster board located directly in front of main register'},
        {id: 2, posting_date: '01/15/17', posting_type: 'postcards', posting_occasion: 'general', contact_name: 'Mark', contact_title: 'owner', notes: 'Mark, the owner, let me leave 25 postcards on the small side table to the left of the entrance.'},
        {id: 3, posting_date: '02/13/17', posting_type: 'postcards', posting_occasion: 'general', contact_name: 'NA', contact_title: 'NA', notes: 'Posted 1 postcard on crowded pinboard to the right of register.'},
        {id: 4, posting_date: '02/15/17', posting_type: 'postcards', posting_occasion: 'fundraiser', contact_name: 'Charis Sederberg', contact_title: 'camp parent', notes: 'Left 25 postcards on main table next to school library entrance in exchange for donation of 2 day passes to fundraiser.'},
        {id: 5, posting_date: '02/22/17', posting_type: 'poster, postcards', posting_occasion: 'event', contact_name: 'NA', contact_title: 'NA', notes: 'Poster on board next to EC door, and able to distribute postcard to every EC student after providing stop-motion activity.'}
      ]);
    })
    .then (() => {
      return knex.raw('ALTER SEQUENCE posting_info_id_seq RESTART WITH 6;')
    })
};
