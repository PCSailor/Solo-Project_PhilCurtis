// soloProjectApp.controller('SystemDetailsController', ['SystemDetailsFactory', '$routeParams', function(SystemDetailsFactory, $routeParams) {

soloProjectApp.controller('SystemDetailsController', ['$routeParams', function($routeParams) {
    console.log($routeParams);

    console.log(new Date().getFullYear() + ' systemdetails.controller.js is run');

  var self = this;
self.system = SystemDetailsFactory.system;
SystemDetailsFactory.getSystemDetails($routeParams.systemId); // Note: passing $routeParams because it's an object with the SystemId on it.
}]);