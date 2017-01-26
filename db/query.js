const knex = require("./knex");

module.exports = {
  findUserByEmail : function(email) {
    return knex('user_table').where('email', email).first();
  },

  findAllUsers: function() {
    return knex('user_table');
  },

  findUserById : function(id) {
    return knex('user_table').where('id', id).first();
  },

  insertUser: function(user) {
    return knex('user_table').insert(user).then(function(stuff) {
      return stuff;
    })
  },

  updateUser: function(user, id) {
    return knex('user_table').update(user).where('id', id)
    .then(function(stuff) {
      return stuff;
    })
  },

  deleteUser: function(id) {
    return knex('user_table').delete().where('id', id)
    .then(function(stuff) {
      return stuff;
    })
  }
}

//This is where your DB queries go. Make as many as you need, put them
//in the module.exports object, then use the in the routes.

//Its possible to put the queries into the Router directly, but its good
//practice to keep them in one spot
