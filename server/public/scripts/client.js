console.log('  ');
console.log(new Date().getFullYear() + ' client.js run');
var soloProjectApp = angular.module('soloProjectAngularApp', ['ngRoute', 'xeditable']);
// NOTE: soloProjectAngularApp on clientJS, Index.html
// NOTE: ngRoute matched to indexHTML/ng-view AND is a dependency of script Angular-route.js AND the .config function below places content within the ng-view area of indexHTML.
soloProjectApp.config(['$routeProvider', function($routeProvider) { $routeProvider
// NOTE: Previous line is the AngularJS Configuration Block, which should only contain configuration & provider code, and is a module being defined. The purpose is Providers registering with Dependency Injector.

.when('/', { // NOTE: this sets the actual domain(matched with nav.html & backend files)
  templateUrl: 'views/home.html', // NOTE: this page puts info on the DOM
  controller: 'MainPageController', // NOTE: controller value must match controller.js
  controllerAs: 'mpc' // NOTE: controller abbr
}) // NOTE: no semi-colon

 .when('/mainpage/', { // NOTE: this sets the actual domain(matched with nav.html)
   templateUrl: '/views/mainpage.html', // NOTE: this puts info on the DOM
    controller: 'MainPageController', // NOTE: controller value must match controller.js
    controllerAs: 'mpc' // NOTE: controller abbr
 }) // NOTE: no semi-colon

.otherwise({
 redirectTo: 'home'
}); // NOTE: semi-colon needed here
    // console.log('clientJs/.when functions run');
}]); // NOTE: for .config function
        // get / .GET
          // add / .POST
            // delete / .DELETE
              // edit / .PUT
