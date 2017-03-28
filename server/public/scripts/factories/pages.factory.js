soloProjectApp.factory('pagesFactory', ['$http', function($http) {
  console.log(new Date().getFullYear() + ' pages.factory.js is run');
  // NOTE: Drop-down needed on 2 different controller.js files = good candidate for factoryJS files // TODO: Determine if factory needed
  // NOTE: Factoryis a dependency controller.JS needs requiring return (at end of this file)
  // NOTE: $http is ajax jump from F/E logic to server // QUESTION: which adds the dependency? AND catches the factory request as glue between factory & server
  // in ang like ajax requests server
  var factoryAppPort = { list: [] }; // NOTE: data to controller AND must be property inside of object // NOTE: Will this code work inside controller, client.js also? YES
  var factoryHistory = { list: [] }; // NOTE: data to controller AND must be property inside of object // NOTE: Will this code work inside controller, client.js also? YES
  getData();
  getHistory();
  // NOTE: Nameplate Data //
    // NOTE: Nameplate Data //
      // NOTE: Nameplate Data //
        // get / .GET
          // add / .POST
            // delete / .DELETE
              // edit / .PUT
  // NOTE: GET Nameplate Data
  function getData () {
    console.log('function getData() running before success'); // NOTE: This is logged after client.js_Line #48
    $http({
      method: 'GET',
      url: 'mainpage/nameplate/' // NOTE: domain routes to app.js
      // NOTE: use same domain if all controllers/factories use same table, then can relate to same routesJS file using same domain
    }).then(function(response) {
      console.log('factory.js/function GET/nameplate data/response.data = ', typeof response.data, response.data);
      factoryAppPort.list = response.data; // NOTE: THIS IS THE DATABASE RETURNED DATA
      // NOTE: Ensure factoryAppPort points to an object property (.list)
      // NOTE: .data pulls only results from server & not other response information
    });
  } // NOTE: for: function getData
  // NOTE: After this GET, should have an array on DOM
  // NOTE: Add new Nameplate
  function addNameplateData(addNameplateData) {
    console.log('add Nameplate = ', addNameplateData); // Note: this log equals the controllerJS console.log('self.newNameplate: ', self.newNameplate); // NOTE: Should be a filled-in object
    $http({
      method: 'POST',
      url: 'mainpage/nameplate/add', // NOTE: Path must match route.JS path
      data: addNameplateData
    }).then(function(response) {
      getData();
    });
  } // NOTE: for: function addNameplateData
  // NOTE: Delete Nameplate
  function deleteNameplate(nameplateid) {
    console.log('deleteNameplate = ', deleteNameplate);
    $http({
      method: 'DELETE',
      url: 'mainpage/nameplate/delete' + nameplateid // NOTE: changing path resulted with this error: DELETE http://localhost:5500/mainPage/deleteMustMatc26 404 (Not Found)
    }).then(function(response) {
      getData();
    });
    console.log('delete from nameplate.factory.js'); // NOTE: 02: logging ok!           last one
  } // NOTE: for: function deleteNameplate

  // NOTE: Edit Nameplate
  function editNameplate (editNameplate) {
    console.log('editNameplate function is run');
    $http({
      method: 'PUT',
      url: 'mainpage/nameplate/edit' + editNameplate.id,
      data: editNameplate
    }).then(function(response) {
      getData();
    });
    console.log('editNameplate.id', editNameplate.id);
  } // NOTE: for: function editNameplate
  // NOTE: System History and Parts Data //
    // NOTE: System History and Parts Data //
      // NOTE: System History and Parts Data //
        // get / .GET
          // add / .POST
            // delete / .DELETE
              // edit / .PUT

        // NOTE: GET System History and Parts Data
 function getHistory () {
    console.log('function getHistory() running before success'); // NOTE: 
    $http({
      method: 'GET',
      url: 'mainPage/history' // NOTE: domain routes to app.js
      // NOTE: use same domain if all controllers/factories use same table, then can relate to same routesJS file using same domain
    }).then(function(response) {
      console.log('factory.js/function-GET/history/response.data = ', typeof response.data, response.data);
      factoryHistory.list = response.data; // NOTE: THIS IS THE DATABASE RETURNED DATA
      // NOTE: Ensure factoryHistory points to an object property (.list)
      // NOTE: .data pulls only results from server & not other response information
    });
  } // NOTE: for: function getHistory
  // NOTE: After this GET, should have an array on DOM

  // NOTE: Add new System History and Parts Data
  function addHistory(addHistory) {
    console.log('addHistory = ', addHistory); // Note: this log equals the controllerJS console.log('self.newHistory: ', self.newHistory); // NOTE: Should be a filled-in object
    $http({
      method: 'POST',
      url: 'mainpage/history/add', // NOTE: Path must match route.JS path
      data: addHistory
    }).then(function(response) {
      getHistory();
    });
  } // NOTE: for: function addNameplate

  // NOTE: Delete System History and Parts Data
  function deleteHistory(historyid) {
    $http({
      method: 'DELETE',
      url: '/mainpage/history/delete' + historyid // NOTE: changing path resulted with this error: DELETE http://localhost:5500/mainpage/deleteMustMatc26 404 (Not Found)
    }).then(function(response) {
      getHistory();
    });
    console.log('delete from history.factory.js ', historyid); // NOTE: 02: logging ok!
  } // NOTE: for: function deleteNameplate

  // NOTE: Edit System History and Parts Data
  function editHistory (editHistory) {
    console.log('editHistory function is run');
    $http({
      method: 'PUT',
      url: 'mainpage/history/edit' + editHistory.id,
      data: editHistory
    }).then(function(response) {
      getHistory();
    });
    console.log('editHistory.id', editHistory.id);
  } // NOTE: for: function editHistory






  // NOTE: Businesses Data //
    // NOTE: Businesses Data //
      // NOTE: Businesses Data //
        // get / .GET
          // add / .POST
            // delete / .DELETE
              // edit / .PUT




  // NOTE: User Notes Data //
    // NOTE: User Notes Data //
      // NOTE: User Notes Data //
        // get / .GET
          // add / .POST
            // delete / .DELETE
              // edit / .PUT


  return {
    // NOTE: returning $http function AND this area is the public API
    // controller connector: factory connector
    // NOTE: Nameplate Data //
    factoryNameplateToController: factoryAppPort, // NOTE: NOT factoryAppPort: mainPageFactory
    addNameplateData: addNameplateData, // NOTE: controller connection: factory connection
    deleteNameplate: deleteNameplate,
    editNameplate: editNameplate,
  // NOTE: System History and Parts Data //
    factoryHistoryToController: factoryHistory,
    addHistoryData: addHistory,
    deleteHistory: deleteHistory,
    editHistory: editHistory
      // NOTE: Businesses Data //
      // NOTE: User Notes Data //
    // NOTE: code from controllerJS: // self.arrayList = mainPageFactory.factoryAppPort; // NOTE: says this.arrayList equals factoryJS-created-variable pointing to array with property inside of object

  }; // NOTE: needs semi-colon!
}]); // NOTE: from soloProjectApp.factory function
