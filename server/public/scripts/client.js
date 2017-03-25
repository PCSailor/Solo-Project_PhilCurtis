console.log(new Date().getFullYear() + ' client.js run');
console.log('  ');
var soloProjectApp = angular.module('soloProjectAngularApp', ['ngRoute', 'xeditable']);
// NOTE: soloProjectAngularApp on clientJS, Index.html
// NOTE: ngRoute matched to indexHTML/ng-view AND is a dependency of script Angular-route.js AND the .config function below places content within the ng-view area of indexHTML.
// QUESTION: How to have ng-route point to different ng-views on indexHTML with different information?
soloProjectApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  // QUESTION: define again why $routeProvider 3 times?

 // NOTE: Error on bad controller: $controller:ctrlreg/A controller with this name is not registered.
// NOTE: 01 view
.when('/home', { // NOTE: this sets the actual domain(matched with nav.html & backend files)
  // templateUrl: 'views/mainPage.html',
  templateUrl: 'views/nav.html', // NOTE: this page puts info on the DOM
  controller: 'mainPageController', // NOTE: controller value must match controller.js
  controllerAs: 'mpc' // NOTE: controller abbr
}) // NOTE: no semi-colon

// NOTE: 02 view
.when('/login', { // NOTE: this sets the actual domain(matched with nav.html & backend files)
  // templateUrl: 'views/mainPage.html',
  templateUrl: '/views/login.html', // NOTE: this page puts info on the DOM
  controller: 'loginController', // NOTE: controller value must match controller.js
  controllerAs: 'lc' // NOTE: controller abbr
}) // NOTE: no semi-colon

// NOTE: 03 mainPage HTML Page
.when('/mainPage/', { // NOTE: this sets the actual domain(matched with nav.html & backend files)
  templateUrl: '/views/mainPage.html', // NOTE: this puts info on the DOM
  controller: 'mainPageController', // NOTE: controller value must match controller.js
  controllerAs: 'mpc' // NOTE: controller abbr
}) // NOTE: no semi-colon


// NOTE: 04 view
.when('/angjslessons', { // NOTE: this sets the actual domain(matched with nav.html)
  // templateUrl: 'views/mainPage.html',
  templateUrl: '/views/angjs-object-array-lessons.html', // NOTE: this page puts info on the DOM
  controller: 'mainPageController', // NOTE: controller value must match controller.js
  controllerAs: 'mpc' // NOTE: controller abbr
}) // NOTE: no semi-colon

// NOTE: 05 view
.otherwise({
  redirectTo: 'index'
}); // NOTE: semi-colon needed here
// console.log('clientJs/.when functions run');
console.log('clientJS/soloProjectApp.config function run');
}]); // NOTE: for .config function
