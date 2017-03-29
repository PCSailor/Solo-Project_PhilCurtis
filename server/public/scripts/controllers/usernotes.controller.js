soloProjectApp.controller('UserNotesController', ['UserNotesFactory', function(UserNotesFactory) {
    console.log(new Date().getFullYear() + ' usernotes.controller.js is run');
  var self = this; // NOTE: self points to 'mpc' abbr defined in clientJS & used in html
  // NOTE: self.message = 'self.whatever always equals an object - VERIFY';

  self.usernotesArrayList = [];
  self.usernotesArrayList = UserNotesFactory.factoryUsernotesToController; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object
  self.newUsernotes = {};

// QUESTION: Why do I need to call the addHistory function with the parameter 'history' but the addNameplate function (above) does not need a call paramenter?
  self.addUsernotes = function() {
    console.log('self.newUsernotes: ', self.newUsernotes); // Note: this log equals the controllerJS console.log('addHistory = ',); // NOTE: Should be a filled-in object
    UserNotesFactory.addUsernotes(self.newUsernotes);
  };
  self.deleteUsernotes = function(usernotesid) {
 console.log('usernotes.controller.js delete: ', usernotesid); // NOTE: 01: logging ok!
    UserNotesFactory.deleteUsernotes(usernotesid);
  };
 self.editUsernotes = function(edited) {
    console.log('Usernotes.controller.js is sending edited data: ', typeof self.editUsernotes, " and ", typeof edited, edited);
     UserNotesFactory.editUsernotes(edited);
        console.log('Usernotes.controller.js is sending edited data: ', typeof self.editUsernotes, " and ", typeof edited, edited);
    };
    }]);
