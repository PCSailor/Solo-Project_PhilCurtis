soloProjectApp.controller('mainPageController', ['pagesFactory', function(pagesFactory) {
  console.log(new Date().getFullYear() + ' mainPageController.JS is run');
  // NOTE: soloProjectApp defined in clientJS AND mainPageController matches clientJS/.when function
  // NOTE: 1st pagesFactory is dependency to factoryJS file factory name & 1st line of code AND 2nd pagesFactory used here for factoryJS data reference
  // NOTE: self.sumthing is 'glue' between DOM & controller, "if it's teid to DOM, start with self"
  var self = this; // NOTE: self points to 'mpc' abbr defined in clientJS & used in html
  // self.message = 'self.whatever always equals an object - VERIFY';
  self.arrayList = [];
  self.arrayList = pagesFactory.makeItUp; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object
  self.newNameplate = {};
  // console.log('self typeof =', typeof self, "AND = ", self);
  console.log('self.arrayList typeof =', typeof self.arrayList, "AND =", self.arrayList);

  // self.addNameplateData = function() {
  self.addNameplate = function() {
    console.log('self.newNameplate: ', self.newNameplate);
    pagesFactory.addNameplateData(self.newNameplate);
  } // NOTE: Working!!
  self.deleteNameplate = function(nameplateid) {
  console.log('Nameplate to delete: ', nameplateid); // NOTE: 01: logging ok!
    pagesFactory.deleteNameplate(nameplateid);
  } // NOTE: Working!!

// NOTE: IMPORT CODE WRITTEN http://plnkr.co/edit/lXq1WB?p=preview
// NOTE: newNameplate = editingdata AND arrayList = tabledata
// for (var i = 0, length = self.arrayList.length; i < length; i++) {
for (var i = 0; i < self.arrayList.length; i++) {
  self.newNameplate[self.arrayList[i].id] = false;
}
self.modify = function(arrayList) {
  self.newNameplate[arrayList.id] = true;
};
self.update = function(arrayList) {
  self.newNameplate[arrayList.id] = false;
};
// NOTE: IMPORT CODE WRITTEN http://plnkr.co/edit/lXq1WB?p=preview


  self.editNameplate = function(nameplate) {
    console.log('self = ', self); // NOTE: shows: editNameplate:(nameplate) / arguments:null / caller:null / length:1 / name:"" <-- // QUESTION: PROBLEM??
    console.log('self.editNameplate = ', self.editNameplate); // NOTE:
    console.log('Nameplate data to edit: ', nameplate);
    // pagesFactory.editNameplateData(nameplate)
    pagesFactory.editNameplate(nameplate)
  } // NOTE:

  // NOTE: _..._NameplateData is function created in factory
}]);
