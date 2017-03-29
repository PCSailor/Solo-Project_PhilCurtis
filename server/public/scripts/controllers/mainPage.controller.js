soloProjectApp.controller('mainPageController', function() {
  console.log(new Date().getFullYear() + ' mainPageController.JS is run');


  // NOTE: soloProjectApp defined in clientJS AND mainPageController matches clientJS/.when function
  // NOTE: 1st pagesFactory is dependency to factoryJS file factory name & 1st line of code AND 2nd pagesFactory used here for factoryJS data reference
  // NOTE: self.sumthing is 'glue' between DOM & controller, "if it's tied to DOM, start with self"
  var self = this; // NOTE: self points to 'mpc' abbr defined in clientJS & used in html
  // NOTE: self.message = 'self.whatever always equals an object - VERIFY';

  // self.historyArrayList = [];
  // self.historyArrayList = pagesFactory.factoryHistoryToController; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object
  // self.newHistory = {};

  // self.businessArrayList = [];
  // self.businessArrayList = businessFactory.factorybusinessToController; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object
  // self.newbusiness = {};

//   self.addBusiness = function(business) {
//     console.log('self.newBusiness: ', self.newBusiness); // Note: this log equals the controllerJS console.log('addBusiness = ',); // NOTE: Should be a filled-in object
//     businessFactory.addBusinessData(self.newBusiness);
//   };
//   self.deleteBusiness = function(businessid) {
//  console.log('delete from business.controller.js: ', businessid); // NOTE: 01: logging ok!
//     businessFactory.deleteBusiness(businessid);
//   };
//  self.editBusiness = function(edited) {
//     console.log('business.controller.js is sending edited data: ', typeof self.editBusiness, " and ", typeof edited, edited);
//     //  businessFactory.editBusiness(edited);
//      businessFactory.editBusiness(edited);
//         console.log('business.controller.js is sending edited data: ', typeof self.editBusiness, " and ", typeof edited, edited);
//     }; 

});

