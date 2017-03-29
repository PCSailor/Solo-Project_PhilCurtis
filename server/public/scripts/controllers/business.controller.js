soloProjectApp.controller('BusinessController', ['BusinessFactory', function(BusinessFactory) {
  console.log(new Date().getFullYear() + ' business.controller.js is run');
    // NOTE: soloProjectApp defined in clientJS AND mainPageController matches clientJS/.when function
  // NOTE: 1st pagesFactory is dependency to factoryJS file factory name & 1st line of code AND 2nd pagesFactory used here for factoryJS data reference
  // NOTE: self.sumthing is 'glue' between DOM & controller, "if it's tied to DOM, start with self"
  var self = this; // NOTE: self points to 'mpc' abbr defined in clientJS & used in html
  // NOTE: self.message = 'self.whatever always equals an object - VERIFY';
  self.arrayList = [];
  self.arrayList = BusinessFactory.factoryBusinessToController; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object
  self.newBusiness = {};

  self.deleteBusiness = function(businessid) {
    console.log('business.controller.js deleted number: ', businessid); // NOTE: 01: logging ok!
    BusinessFactory.deleteBusiness(businessid);
  };
  self.addBusiness = function(newBusiness) {
    console.log('self.newBusiness: ', self.newBusiness); // Note: this log equals the factoryJS console.log('add Business = ', addBusinessData); // NOTE: Should be a filled-in object
    BusinessFactory.addBusiness(self.newBusiness);
  };
//  self.editBusiness = function(edited) {
//     // onsole.log('business.controller.js is sending edited data: ', edited); // NOTE:
//      BusinessFactory.editBusiness(edited);
//     console.log('business.controller.js is sending edited data: ', edited); // NOTE:
//     };

// NOTE: TESTING
  console.log('self =', self);
  console.log('self.arrayList =', self.arrayList);
 console.log('self.arrayList.list =', typeof self.arrayList.list, 'with properties of: ', self.arrayList.list);
  console.log('self.business: ', self.business); // NOTE: Should be an empty object
 console.log('self.newBusiness: ', self.newBusiness); // NOTE: Should be an empty object
 // console.log('self.editBusiness: ', self.editBusiness); // NOTE: Should be an empty object


  }]);