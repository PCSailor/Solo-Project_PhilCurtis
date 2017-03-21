console.log('JS script loaded');
var soloProjectApp = angular.module('soloProjectAngularApp', ['ngRoute']);
// NOTE: soloProjectAngularApp on clientJS, Index.html
// NOTE: ngRoute matched to indexHTML/ng-view AND is a dependency of script Angular-route.js AND the .config function below places content within the ng-view area of indexHTML.
// QUESTION: How to have ng-route point to different ng-views on indexHTML with different information?
soloProjectApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  // QUESTION: define again why $routeProvider 3 times?

  // TODO: Bring in later:
// .when('/navHtmlLogin', {
//   templateUrl: 'views/login.html',
//   controller: '', // NOTE: controller value must match controller.js
//   controllerAs: '' // NOTE: controller abbr
// })
// TODO: Bring in later:
// .when('/navHtmlEntry', {
//   templateUrl: 'views/.html',
//   controller: '', // NOTE: controller value must match controller.js
//   controllerAs: '' // NOTE: controller abbr
// })

.when('/mainPage', {
  templateUrl: 'views/mainPage.html',
  controller: 'mainPageController', // NOTE: controller value must match controller.js
  controllerAs: 'mpc' // NOTE: controller abbr
}) // NOTE: no semi-colon
.otherwise({
  redirectTo: 'index'
}); // NOTE: semi-colon needed here

console.log('soloProjectApp.config function run');
}]); // NOTE: for .config function
