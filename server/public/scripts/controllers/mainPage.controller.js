soloProjectApp.controller('mainPageController', ['pagesFactory', function(pagesFactory) {
  console.log(new Date().getFullYear() + ' mainPageController.JS is run');
  // NOTE: soloProjectApp defined in clientJS AND mainPageController matches clientJS/.when function
  // NOTE: 1st pagesFactory is dependency to factoryJS file factory name & 1st line of code AND 2nd pagesFactory used here for factoryJS data reference
  // NOTE: self.sumthing is 'glue' between DOM & controller, "if it's tied to DOM, start with self"
  var self = this; // NOTE: self points to 'mpc' abbr defined in clientJS & used in html
  // NOTE: self.message = 'self.whatever always equals an object - VERIFY';
  self.arrayList = [];
  self.arrayList = pagesFactory.factoryNameplateToController; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object
  self.newNameplate = {};

  self.historyArrayList = [];
  self.historyArrayList = pagesFactory.factoryHistoryToController; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object
  self.newHistory = {};

  self.businessArrayList = [];
  self.businessArrayList = businessFactory.factorybusinessToController; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object
  self.newbusiness = {};

  // NOTE: TESTING
  //console.log('self =', self);
  //console.log('self.arrayList =', self.arrayList);
  //console.log('self.arrayList.list =', typeof self.arrayList.list, 'with properties of: ', self.arrayList.list);
  //console.log('self.nameplate: ', self.nameplate); // NOTE: Should be an empty object
  console.log('self.newNameplate: ', self.newNameplate); // NOTE: Should be an empty object
  //console.log('self.editNameplate: ', self.editNameplate); // NOTE: Should be an empty object
  console.log('self.newHistory: ', self.newHistory); // NOTE: Should be an empty object
 

  // NOTE: Nameplate Data //
    // NOTE: Nameplate Data //
      // NOTE: Nameplate Data //
        // get / .GET
          // add / .POST
            // delete / .DELETE
              // edit / .PUT
  // NOTE: _..._NameplateData is function created in factory
  self.addNameplate = function() {
    console.log('self.newNameplate: ', self.newNameplate); // Note: this log equals the factoryJS console.log('add Nameplate = ', addNameplateData); // NOTE: Should be a filled-in object
    pagesFactory.addNameplateData(self.newNameplate);
   };
  // self.deleteNameplate = function(nameplateid) {
  // console.log('delete from nameplate.controller.js: ', nameplateid); // NOTE: 01: logging ok!
  //   pagesFactory.deleteNameplate(nameplateid);
  // };
 self.editNameplate = function(edited) {
    console.log('nameplate.controller.js is sending edited data: ', edited); // NOTE:
     pagesFactory.editNameplate(edited);
    console.log('nameplate.controller.js is sending edited data: ', edited); // NOTE:
    };
  // NOTE: System History and Parts Data //
    // NOTE: System History and Parts Data //
      // NOTE: System History and Parts Data //
        // get / .GET
          // add / .POST
            // delete / .DELETE
              // edit / .PUT
// QUESTION: Why do I need to call the addHistory function with the parameter 'history' but the addNameplate function (above) does not need a call paramenter?
  self.addHistory = function(history) {
    console.log('self.newHistory: ', self.newHistory); // Note: this log equals the controllerJS console.log('addHistory = ',); // NOTE: Should be a filled-in object
    pagesFactory.addHistoryData(self.newHistory);
  };
  self.deleteHistory = function(historyid) {
 console.log('delete from history.controller.js: ', historyid); // NOTE: 01: logging ok!
    pagesFactory.deleteHistory(historyid);
  };
 self.editHistory = function(edited) {
    console.log('history.controller.js is sending edited data: ', typeof self.editHistory, " and ", typeof edited, edited);
    //  pagesFactory.editHistory(edited);
     pagesFactory.editHistory(edited);
        console.log('history.controller.js is sending edited data: ', typeof self.editHistory, " and ", typeof edited, edited);
    }; 
  // NOTE: Businesses Data //
    // NOTE: Businesses Data //
      // NOTE: Businesses Data //
        // get / .GET
          // add / .POST
            // delete / .DELETE
              // edit / .PUT
  self.addBusiness = function(business) {
    console.log('self.newBusiness: ', self.newBusiness); // Note: this log equals the controllerJS console.log('addBusiness = ',); // NOTE: Should be a filled-in object
    businessFactory.addBusinessData(self.newBusiness);
  };
  self.deleteBusiness = function(businessid) {
 console.log('delete from business.controller.js: ', businessid); // NOTE: 01: logging ok!
    businessFactory.deleteBusiness(businessid);
  };
 self.editBusiness = function(edited) {
    console.log('business.controller.js is sending edited data: ', typeof self.editBusiness, " and ", typeof edited, edited);
    //  businessFactory.editBusiness(edited);
     businessFactory.editBusiness(edited);
        console.log('business.controller.js is sending edited data: ', typeof self.editBusiness, " and ", typeof edited, edited);
    }; 



  // NOTE: User Notes Data //
    // NOTE: User Notes Data //
      // NOTE: User Notes Data //
        // get / .GET
          // add / .POST
            // delete / .DELETE
              // edit / .PUT

}]);

