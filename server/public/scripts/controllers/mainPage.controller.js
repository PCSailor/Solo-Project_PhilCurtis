// soloProjectApp.controller('mainPageController', ['pagesFactory', function(pagesFactory) {
soloProjectApp.controller('mainPageController', ['pagesFactory', function(pagesFactory) {
  console.log(new Date().getFullYear() + ' mainPageController.JS is run');
  // NOTE: soloProjectApp defined in clientJS AND mainPageController matches clientJS/.when function
  // NOTE: 1st pagesFactory is dependency to factoryJS file factory name & 1st line of code AND 2nd pagesFactory used here for factoryJS data reference
  // NOTE: self.sumthing is 'glue' between DOM & controller, "if it's tied to DOM, start with self"
  var self = this; // NOTE: self points to 'mpc' abbr defined in clientJS & used in html
  // NOTE: self.message = 'self.whatever always equals an object - VERIFY';
  self.arrayList = [];
  self.arrayList = pagesFactory.factoryNameplateDataToController; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object
  self.newNameplate = {};
  self.historyArrayList = [];
  self.historyArrayList = pagesFactory.factoryHistoryToController; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object
  self.newHistory = {};
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
  }; // NOTE: Working!!
  self.deleteNameplate = function(nameplateid) {
  console.log('Nameplate to delete: ', nameplateid); // NOTE: 01: logging ok!
    pagesFactory.deleteNameplate(nameplateid);
  }; // NOTE: Working!!
 self.editNameplate = function(edited) {
    console.log('Edited nameplate: ', edited); // NOTE:
     pagesFactory.editNameplate(edited);
    }; // NOTE: Working!!
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
  }; // NOTE: Working!!
  self.deleteHistory = function(historyid) {
  console.log('History to delete: ', historyid, deleteHistory); // NOTE: 01: logging ok!
    pagesFactory.deleteHistory(historyid);
  }; // NOTE: Working!!
 self.editHistory = function(edited) {
    console.log('Edited history: ', edited); // NOTE:
     pagesFactory.editHistory(edited);
    }; 
// NOTE: Working!!

  // NOTE: Businesses Data //
    // NOTE: Businesses Data //
      // NOTE: Businesses Data //
        // get / .GET
          // add / .POST
            // delete / .DELETE
              // edit / .PUT




  // NOTE: User Notes Data //
    // NOTE: User Notes Data //
      // NOTE: User Notes Data //
        // get / .GET
          // add / .POST
            // delete / .DELETE
              // edit / .PUT

}]);

