soloProjectApp.factory('mainPageFactory', ['$http', function($http) {
  // QUESTION: This-why?:
// NOTE: Drop-down needed on 2 different controller.js files = good candidate for factoryJS files // TODO: Determine if factory needed
// NOTE: Factoryis a dependency controller.JS needs requiring return (at end of this file)
// NOTE: $http is ajax jump from F/E logic to server // QUESTION: which adds the dependency? AND catches the factory request as glue between factory & server
// in ang like ajax requests server
var factoryAppPort = { list: [] }; // NOTE: data to controller AND must be property inside of object // QUESTION: Will this code work inside controller, client.js also?

getData();

function getData () {
console.log('getData function runs-before success');
$http({
  method: 'GET',
  url: '/arrayList' // NOTE: domain routes to app.js
  // NOTE: use same domain if all controllers/factories use same table, then can relate to same routesJS file using same domain
}).then(function(response) {
  console.log('GET response.data from factory = ', response.data);
  console.log('typeof response.data = ', typeof response.data);
  factoryAppPort.list = response.data; // NOTE: THIS IS THE DATABASE RETURNED DATA
  // NOTE: Ensure factoryAppPort points to an object property (.list)
  // NOTE: .data pulls only results from server & not other response information
});
} // NOTE: for: function getData
// NOTE: After this GET, should have an array on DOM


return {
// NOTE: returning $http function AND this area is the public API

// NOTE: mainPageFactory = set here within soloProjectApp.factory
// NOTE: factoryAppPort = var set here connecting to controllorJS
// NOTE: Return example = controller connection: factory connection
makeItUp: factoryAppPort // NOTE: NOT factoryAppPort: mainPageFactory

// NOTE: code from controllerJS: // self.arrayList = mainPageFactory.factoryAppPort; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object

}; // QUESTION: needs semi-colon!
console.log('soloProjectApp.factory is run');
}]); // NOTE: from soloProjectApp.factory function
