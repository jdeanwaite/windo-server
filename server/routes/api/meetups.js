// ---------------------------------------------------------------------------//
// MEETUP API IMPLEMENTATIONS
// ---------------------------------------------------------------------------//
// This file contains the implementations for the Meetup endpoints of the API
// router.
// ---------------------------------------------------------------------------//
// Dependencies
var mongoose         = require('mongoose');
var Meetup           = require('../../models').Meetup;

module.exports = {

// ---------------------------------------------------------------------------//
// Meetups: Get all
// Retrieves a list of all the meetups and sends them to the client.
// TODO:
// - get Meetup info from session and return list of all meetups
// - figure out default max number of meetups to return.
// - allow for query of max number to return or base on dates.
// ---------------------------------------------------------------------------//
  getAll: (req, res) => {
    console.log('retrieving all meetups');
    Meetup.find({}, function(err, docs) {
      if (err) {
        res.status(400);
        return res.send(err);
      }

      res.status(200);
      res.json(docs);
    });
  },

// ---------------------------------------------------------------------------//
// Meetups: Insert
// Inserts a new meetup into the database. Sends the new doc, or err if exists.
// ---------------------------------------------------------------------------//
  insert: (req, res) => {
    console.log('saving new meetup: ', req.body);



    for (year in req.body.dateHash) {
      for (month in req.body.dateHash[year]) {
        for (day in req.body.dateHash[year][month]) {
          var date = new Date(year, month, day);
          if (date == "Invalid Date")
            return res.status(400).json({
              error : "The given dates are invalid"
            });

          var today = new Date(Date.now());
          if (month > 11 || month < 0 || day > 31 || day < 0 ||
              year < today.getFullYear() || year > (today.getFullYear() + 5))
            return res.status(400).json({
              error : "The given dates are invalid"
            });
        }
      }
    }

    var newMeetup = new Meetup(req.body);

    newMeetup.save(function(err, meetupDoc) {
      console.log('done', meetupDoc);
      if (err) {
        res.status(400);
        return res.send(err);
      }

      res.status(200);
      res.json(meetupDoc);
    });
  },

// ---------------------------------------------------------------------------//
// Meetups: Update
// Updates the given meetup document. If the meetup is not found then it returns
// a 404, if it is successful then it returns a 200 and sends the new meetup
// document to the client.
// TODO:
// - who can update this? Make sure that if they arent the creator that
//   they cant maliciously update the meetup.
// -
// ---------------------------------------------------------------------------//
  update: (req, res) => {
    console.log('updating meetup ' + req.params.id + 'with:', req.body);
    Meetup.findOne({ _id: req.params.id }, function(err, doc) {
      if (err) {
        res.status(400);
        return res.send(err);
      }

      if (!doc) {
        res.status(404);
        return res.send('Meetup not found');
      }

      doc.name     = req.body.name;
      doc.fromDate = req.body.fromDate;
      doc.toDate   = req.body.toDate;
      doc.invitees = req.body.invitees;
      doc.save(function(err, newDoc) {
        if (err) {
          res.status(400);
          return res.send(err);
        }

        console.log('successfully updated:', newDoc);
        res.status(200);
        res.json(newDoc);
      })
    });
  },

// ---------------------------------------------------------------------------//
// Meetups: Remove
// Removes a meetup from the database. Returns err if one exists.
// ---------------------------------------------------------------------------//
  remove: (req, res) => {
    console.log('removing meetup: ', req.params.id);
    User.findOneAndRemove({ _id: req.params.id }, (err, doc) => {
      if (err) {
        res.status(400);
        return res.send(err);
      }
      if (!doc) {
        res.status(404);
        return res.send("meetup not found");
      }
      res.status(200);
      res.send('success');
    });
  }

}
