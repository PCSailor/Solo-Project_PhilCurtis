// soloProjectApp.controller('ClientRouteController', ['ClientRouteFactory', '$routeParams', function(ClientRouteFactory, $routeParams) {

soloProjectApp.controller('ClientRouteController', ['$routeParams', function($routeParams) {
    console.log($routeParams);

    console.log(new Date().getFullYear() + ' systemdetails.controller.js is run');

  var self = this;
self.system = ClientRouteFactory.system;
ClientRouteFactory.getSystemDetails($routeParams.systemId); // Note: passing $routeParams because it's an object with the SystemId on it.
}]);