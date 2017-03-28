soloProjectApp.controller('SystemHistoryController', ['SystemHistoryFactory', function(SystemHistoryFactory) {
    console.log(new Date().getFullYear() + ' systemhistory.controller.js is run');
  var self = this; // NOTE: self points to 'mpc' abbr defined in clientJS & used in html
  // NOTE: self.message = 'self.whatever always equals an object - VERIFY';

  self.historyArrayList = [];
  self.historyArrayList = SystemHistoryFactory.factoryHistoryToController; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object
  self.newHistory = {};

// QUESTION: Why do I need to call the addHistory function with the parameter 'history' but the addNameplate function (above) does not need a call paramenter?
  self.addHistory = function(history) {
    console.log('self.newHistory: ', self.newHistory); // Note: this log equals the controllerJS console.log('addHistory = ',); // NOTE: Should be a filled-in object
    SystemHistoryFactory.addHistoryData(self.newHistory);
  };
  self.deleteHistory = function(historyid) {
 console.log('systemhistory.controller.js delete: ', historyid); // NOTE: 01: logging ok!
    SystemHistoryFactory.deleteHistory(historyid);
  };
 self.editHistory = function(edited) {
    console.log('systemhistory.controller.js is sending edited data: ', typeof self.editHistory, " and ", typeof edited, edited);
     SystemHistoryFactory.editHistory(edited);
        console.log('systemhistory.controller.js is sending edited data: ', typeof self.editHistory, " and ", typeof edited, edited);
    };
    }]);
