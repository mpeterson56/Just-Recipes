//const { authenticate } = require("passport");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy
const {User} = require('../models')

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));
  
  module.exports = passport;