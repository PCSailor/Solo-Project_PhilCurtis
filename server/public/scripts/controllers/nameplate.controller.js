soloProjectApp.controller('NameplateController', ['NameplateFactory', function(nameplateFactory) {
  console.log(new Date().getFullYear() + ' NameplateController.js is run');
  // NOTE: soloProjectApp defined in clientJS AND mainPageController matches clientJS/.when function
  // NOTE: 1st pagesFactory is dependency to factoryJS file factory name & 1st line of code AND 2nd pagesFactory used here for factoryJS data reference
  // NOTE: self.sumthing is 'glue' between DOM & controller, "if it's tied to DOM, start with self"
  var self = this; // NOTE: self points to 'mpc' abbr defined in clientJS & used in html
  // NOTE: self.message = 'self.whatever always equals an object - VERIFY';
  self.arrayList = [];
  self.arrayList = nameplateFactory.factoryNameplateToController; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object
 // self.newNameplate = {};

    // NOTE: TESTING
  //console.log('self =', self);
  // console.log('self.arrayList =', self.arrayList);
 // console.log('self.arrayList.list =', typeof self.arrayList.list, 'with properties of: ', self.arrayList.list);
  //console.log('self.nameplate: ', self.nameplate); // NOTE: Should be an empty object
 // console.log('self.newNameplate: ', self.newNameplate); // NOTE: Should be an empty object
  //console.log('self.editNameplate: ', self.editNameplate); // NOTE: Should be an empty object

  // NOTE: _..._NameplateData is function created in factory
  // self.addNameplate = function() {
  //   console.log('self.newNameplate: ', self.newNameplate); // Note: this log equals the factoryJS console.log('add Nameplate = ', addNameplateData); // NOTE: Should be a filled-in object
  //   nameplateFactory.addNameplateData(self.newNameplate);
  //  };
//   self.deleteNameplate = function(nameplateid) {
//   console.log('delete from nameplate.controller.js: ', nameplateid); // NOTE: 01: logging ok!
//     pagesFactory.deleteNameplate(nameplateid);
//   };
//  self.editNameplate = function(edited) {
//     console.log('nameplate.controller.js is sending edited data: ', edited); // NOTE:
//      pagesFactory.editNameplate(edited);
//     console.log('nameplate.controller.js is sending edited data: ', edited); // NOTE:
//     };


  }]);