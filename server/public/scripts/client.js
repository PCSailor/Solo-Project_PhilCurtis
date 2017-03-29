console.log('  ');
console.log(new Date().getFullYear() + ' client.js run');
var soloProjectApp = angular.module('soloProjectAngularApp', ['ngRoute', 'xeditable']);
// NOTE: soloProjectAngularApp on clientJS, Index.html
// NOTE: ngRoute matched to indexHTML/ng-view AND is a dependency of script Angular-route.js AND the .config function below places content within the ng-view area of indexHTML.
// QUESTION: How to have ng-route point to different ng-views on indexHTML with different information?
soloProjectApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
// NOTE: Previous line is the AngularJS Configuration Block, which should only contain configuration & provider code, and is a module being defined. The purpose is Providers registering with Dependency Injector.

 // NOTE: Error on bad controller: $controller:ctrlreg/A controller with this name is not registered.
// NOTE: 01 view
.when('/home', { // NOTE: this sets the actual domain(matched with nav.html & backend files)
  templateUrl: 'views/home.html', // NOTE: this page puts info on the DOM
  controller: 'mainPageController', // NOTE: controller value must match controller.js
  controllerAs: 'mpc' // NOTE: controller abbr
}) // NOTE: no semi-colon

// NOTE: 03 mainpage HTML Page
 .when('/mainpage/', { // NOTE: this sets the actual domain(matched with nav.html)
   templateUrl: '/views/mainpage.html', // NOTE: this puts info on the DOM
  controller: 'mainPageController', // NOTE: controller value must match controller.js
  controllerAs: 'mpc' // NOTE: controller abbr
 }) // NOTE: no semi-colon

// NOTE: 03 mainpage HTML Page
//.when('/mainpage/nameplate', { // NOTE: this sets the actual domain(matched with nav.html)
// .when('/nameplate/', { // NOTE: this sets the actual domain(matched with nav.html)
//   templateUrl: '/views/nameplate.html', // NOTE: this puts info on the DOM
//   controller: 'NameplateController', // NOTE: controller value must match controller.js
//   controllerAs: 'nc' // NOTE: controller abbr
// }) // NOTE: no semi-colon

// NOTE: 0
// .when('/mainpage/', { // NOTE: this sets the actual domain(matched with nav.html)
// .when('/mainpage/systemhistory/', { // NOTE: this sets the actual domain(matched with nav.html)
//   templateUrl: '/views/systemhistory.html', // NOTE: this puts info on the DOM
//   controller: 'SystemHistoryController', // NOTE: controller value must match controller.js
//   controllerAs: 'shc' // NOTE: controller abbr
// }) // NOTE: no semi-colon


// .when('/mainpage/', { // NOTE: this sets the actual domain(matched with nav.html)
//   templateUrl: '/views/business.html', // NOTE: this puts info on the DOM
//   controller: 'BusinessController', // NOTE: controller value must match controller.js
//   controllerAs: 'bc' // NOTE: controller abbr
// }) // NOTE: no semi-colon


// NOTE: 05 view
.otherwise({
 redirectTo: 'home'
}); // NOTE: semi-colon needed here
// console.log('clientJs/.when functions run');
}]); // NOTE: for .config function
