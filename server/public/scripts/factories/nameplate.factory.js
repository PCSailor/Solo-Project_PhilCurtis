soloProjectApp.factory('NameplateFactory', ['$http', function($http) {
  console.log(new Date().getFullYear() + ' Nameplate.factory.js is run');
  // NOTE: Drop-down needed on 2 different controller.js files = good candidate for factoryJS files
  // NOTE: Factoryis a dependency controller.JS needs requiring return (at end of this file)
  // NOTE: $http is ajax jump from F/E logic to server AND catches the factory request as glue between factory & server
  // in ang like ajax requests server
  var factoryNameplate = { list: [] }; // NOTE: data to controller AND must be property inside of object // NOTE: Will this code work inside controller, client.js also? YES
getNameplate();

  // NOTE: GET Nameplate Data
  function getNameplate () {
    console.log('function getNameplate() running before success'); // NOTE: 
    $http({
      method: 'GET',
      url: '/nameplate/' // NOTE: domain routes to app.js
      // NOTE: use same domain if all controllers/factories use same table, then can relate to same routesJS file using same domain
    }).then(function(response) {
      console.log('factory.js/function GET/nameplate data/response.data = ', typeof response.data, response.data);
      factoryNameplate.list = response.data; // NOTE: THIS IS THE DATABASE RETURNED DATA
      // NOTE: Ensure factory... points to an object property (.list)
      // NOTE: .data pulls only results from server & not other response information
    });
  } // NOTE: for: function getData
  // NOTE: After this GET, should have an array on DOM

 // NOTE: Delete Nameplate
  function deleteNameplate(nameplateid) {
    console.log('deleteNameplate = ', deleteNameplate);
    $http({
      method: 'DELETE',
      url: '/nameplate/delete' + nameplateid // NOTE: changing path resulted with this error: DELETE http://localhost:5500/mainPage/deleteMustMatc26 404 (Not Found)
    }).then(function(response) {
      getNameplate();
    });
    console.log('delete from nameplate.factory.js'); // NOTE: 02: logging ok!
  } // NOTE: for: function deleteNameplate
  
  // NOTE: Add new Nameplate
  function addNameplateData(addNameplateData) {
    console.log('add Nameplate = ', addNameplateData); // Note: this log equals the controllerJS console.log('self.newNameplate: ', self.newNameplate); // NOTE: Should be a filled-in object
    $http({
      method: 'POST',
      url: '/nameplate/add', // NOTE: Path must match route.JS path
      data: addNameplateData
    }).then(function(response) {
      getNameplate();
    });
  } // NOTE: for: function addNameplateData

    // NOTE: Edit Nameplate
  function editNameplate (editNameplate) {
    console.log('editNameplate function is run');
    $http({
      method: 'PUT',
      url: '/nameplate/edit' + editNameplate.id,
      data: editNameplate
    }).then(function(response) {
      getNameplate();
    });
    console.log('editNameplate.id', editNameplate.id);
  } // NOTE: for: function editNameplate

  return { // DONT FORGET THE COMMAS!!
    // NOTE: returning $http function AND this area is the public API
    // controller connector: factory connector
    // NOTE: Nameplate Data //
    factoryNameplateToController: factoryNameplate,
    deleteNameplate: deleteNameplate,
    addNameplateData: addNameplateData,
    editNameplate: editNameplate
    // NOTE: code from controllerJS: // self.arrayList = mainPageFactory.factoryAppPort; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object
  }; // NOTE: needs semi-colon!
}]); // NOTE: from soloProjectApp.factory function