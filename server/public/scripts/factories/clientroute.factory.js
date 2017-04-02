soloProjectApp.factory('ClientRouteFactory', ['$http', function($http){
console.log(new Date().getFullYear() + ' ClientRoute.factory.js is run');
  // NOTE: Drop-down needed on 2 different controller.js files = good candidate for factoryJS files
    // NOTE: Factoryis a dependency controller.JS needs requiring return (at end of this file)
  // NOTE: $http is ajax jump from F/E logic to server AND catches the factory request as glue between factory & server
var ClientRouteFactory = { list: [] };
getSystemDetails();

// GET System List
function getSystemDetails () {
console.log('function getSystemDetails() running before success');
$http({
    method: 'GET',
    url: '/clientroute/'
}).then(function(response) {
    console.log('factory.js/function-GET/systemdetails/response.data = ', typeof response.data, response.data);
    ClientRouteFactory.list = response.data;
});
}

return { 
    factorySystemDetailsToController: ClientRouteFactory
}

}]); // NOTE: from soloProjectApp.factory function