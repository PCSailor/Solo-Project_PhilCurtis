soloProjectApp.controller('mainPageController', ['mainPageFactory', function(mainPageFactory) {
  console.log('mainPageController.JS is run');
  // NOTE: soloProjectApp defined in clientJS AND mainPageController matches clientJS/.when function
  // NOTE: 1st mainPageController is dependency to factoryJS file factory name & 1st line of code AND 2nd mainPageController used here for factoryJS data reference
  // NOTE: self.sumthing is 'glue' between DOM & controller, "if it's teid to DOM, start with self"
  var self = this; // NOTE: self points to 'mpc' abbr defined in clientJS & used in html
  self.message = 'Test message from mainPage.Controller.js';
  self.arrayList = [];
  self.objectApp = {}; // NOTE: object connected to HTML User Entry Fields // QUESTION: NEEDED for Login??
  self.arrayList = mainPageFactory.makeItUp; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object

  console.log('self.arrayList = ', self.arrayList);


  console.log('mainPageController.JS is run');
  console.log('self = ', self);
  console.log('typeof self = ', typeof self);
  console.log('self.arrayList = ', self.arrayList);
  console.log('typeof self.arrayList = ', typeof self.arrayList);
// NOTE: NOPE: self.arrayList[manufacturer]);
// NOTE: NOPE = undefined = self.arrayList.manufacturer
// NOTE: NOPE = empty array = self.arrayList.list
// NOTE: NOPE = undefined = self.arrayList[0]
console.log('typeof self.arrayList = ', typeof self.arrayList)


}]);
