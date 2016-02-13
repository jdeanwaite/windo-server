module.exports = {
  /* GET meetup list*/
  getAll: function(req, res) {
    //TODO: get user info from session and return list of all meetups
    //TODO: figure out default max number of meetups to return.
    //TODO: allow for query of max number to return or base on dates.
  },

  /* POST meetup create */
  create: function(req, res) {
    //TODO: validate meetup object
    //TODO: insert into database.
  },

  /* PUT meetup update */
  // who can update this? Make sure that if they arent the creator that
  // they cant maliciously update the meetup.
  update: function(req, res) {
    //TODO: validate updated meetup
    //TODO: update meetup in database.
  },

  /* DELETE meetup delete */
  delete: function(req, res) {
    //TODO: remove meetup from database
  }
}
