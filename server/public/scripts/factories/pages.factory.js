soloProjectApp.factory('pagesFactory', ['$http', function($http) {
  // QUESTION: This-why?:
  // NOTE: Drop-down needed on 2 different controller.js files = good candidate for factoryJS files // TODO: Determine if factory needed
  // NOTE: Factoryis a dependency controller.JS needs requiring return (at end of this file)
  // NOTE: $http is ajax jump from F/E logic to server // QUESTION: which adds the dependency? AND catches the factory request as glue between factory & server
  // in ang like ajax requests server
  var factoryAppPort = { list: [] }; // NOTE: data to controller AND must be property inside of object // QUESTION: Will this code work inside controller, client.js also?
  getData();

  // NOTE: GET Nameplate Data
  function getData () {
    console.log('getData function running before success'); // NOTE: This is logged after client.js_Line #48
    $http({
      method: 'GET',
      url: 'mainPage/nameplateData' // NOTE: domain routes to app.js
      // NOTE: use same domain if all controllers/factories use same table, then can relate to same routesJS file using same domain
    }).then(function(response) {
      console.log('pages.factory.js/$http-GET/ typeof AND response.data = ', typeof response.data, response.data);
      factoryAppPort.list = response.data; // NOTE: THIS IS THE DATABASE RETURNED DATA
      // NOTE: Ensure factoryAppPort points to an object property (.list)
      // NOTE: .data pulls only results from server & not other response information
    });
  } // NOTE: for: function getData
  // NOTE: After this GET, should have an array on DOM

  // NOTE: Add new Nameplate
  function addNameplateData(addNameplateData) {
    $http({
      method: 'POST',
      // url: '/NameplateData/add',
      url: 'mainPage/nameplateData/add',
      data: addNameplateData
    }).then(function(response) {
      getData();
    });
  } // NOTE: for: function addNameplate

  // NOTE: Delete Nameplate
  function deleteNameplate (deleteNameplate) {
    $http({
      method: 'DELETE',
      url: 'mainPage/nameplateData/delete' + deleteNameplate
    }).then(function(response) {
      getData();
    });
  } // NOTE: for: function deleteNameplate

  // // NOTE: Edit Nameplate
  // function editNameplate (editNameplate) {
  //   $http({
  //     method: 'PUT'
  //     url: 'mainPage/nameplateData/edit' + editNameplate
  //   }).then(function(response) {
  //     getData();
  //   });
  // } // NOTE: for: function editNameplate


  return {
    // NOTE: returning $http function AND this area is the public API

    // NOTE: mainPageFactory = set here within soloProjectApp.factory
    // NOTE: factoryAppPort = var set here connecting to controllorJS
    // NOTE: Return example = controller connection: factory connection
    makeItUp: factoryAppPort, // NOTE: NOT factoryAppPort: mainPageFactory
    addNameplateData: addNameplateData // NOTE: controller connection: factory connection

    // NOTE: code from controllerJS: // self.arrayList = mainPageFactory.factoryAppPort; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object

  }; // NOTE: needs semi-colon!
  console.log(new Date().getFullYear() + ' soloProjectApp.factory is run');
}]); // NOTE: from soloProjectApp.factory function
