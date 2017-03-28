soloProjectApp.factory('nameplateFactory', ['$http', function($http) {
  console.log(new Date().getFullYear() + ' nameplate.factory.js is run');
  // NOTE: Drop-down needed on 2 different controller.js files = good candidate for factoryJS files // TODO: Determine if factory needed
  // NOTE: Factoryis a dependency controller.JS needs requiring return (at end of this file)
  // NOTE: $http is ajax jump from F/E logic to server // QUESTION: which adds the dependency? AND catches the factory request as glue between factory & server
  // in ang like ajax requests server
  var factoryNameplate = { list: [] }; // NOTE: data to controller AND must be property inside of object // NOTE: Will this code work inside controller, client.js also? YES

getNameplate();

  // NOTE: GET Nameplate Data
  function getNameplate () {
    console.log('function getNameplate() running before success'); // NOTE: 
    $http({
      method: 'GET',
      url: 'mainpage/nameplate/' // NOTE: domain routes to app.js
      // NOTE: use same domain if all controllers/factories use same table, then can relate to same routesJS file using same domain
    }).then(function(response) {
      console.log('factory.js/function GET/nameplate data/response.data = ', typeof response.data, response.data);
      factoryNameplate.list = response.data; // NOTE: THIS IS THE DATABASE RETURNED DATA
      // NOTE: Ensure factory... points to an object property (.list)
      // NOTE: .data pulls only results from server & not other response information
    });
  } // NOTE: for: function getData
  // NOTE: After this GET, should have an array on DOM
  // NOTE: Add new Nameplate
//   function addNameplateData(addNameplateData) {
//     console.log('add Nameplate = ', addNameplateData); // Note: this log equals the controllerJS console.log('self.newNameplate: ', self.newNameplate); // NOTE: Should be a filled-in object
//     $http({
//       method: 'POST',
//       url: 'mainpage/nameplate/add', // NOTE: Path must match route.JS path
//       data: addNameplateData
//     }).then(function(response) {
//       getData();
//     });
//   } // NOTE: for: function addNameplateData


  return { // DONT FORGET THE FUCKING COMMAS!!
    // NOTE: returning $http function AND this area is the public API
    // controller connector: factory connector
    // NOTE: Nameplate Data //
    factoryNameplateToController: factoryNameplate // NOTE: NOT factoryAppPort: mainPageFactory
   // addNameplateData: addNameplateData, // NOTE: controller connection: factory connection
   // deleteNameplate: deleteNameplate,
   // editNameplate: editNameplate,
    // NOTE: code from controllerJS: // self.arrayList = mainPageFactory.factoryAppPort; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object
  }; // NOTE: needs semi-colon!
}]); // NOTE: from soloProjectApp.factory function