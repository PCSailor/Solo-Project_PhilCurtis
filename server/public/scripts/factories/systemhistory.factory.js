soloProjectApp.factory('SystemHistoryFactory', ['$http', function($http) {
    console.log(new Date().getFullYear() + ' systemhistory.factory.js is run');

  // NOTE: Drop-down needed on 2 different controller.js files = good candidate for factoryJS files
  // NOTE: Factoryis a dependency controller.JS needs requiring return (at end of this file)
  // NOTE: $http is ajax jump from F/E logic to server // QUESTION: which adds the dependency? AND catches the factory request as glue between factory & server
  // in ang like ajax requests server
var factoryHistory = { list: [] }; // NOTE: data to controller AND must be property inside of object // NOTE: Will this code work inside controller, client.js also? YES
getHistory();

 // NOTE: GET System History and Parts Data
 function getHistory () {
    console.log('function getHistory() running before success'); // NOTE: 
    $http({
      method: 'GET',
      url: '/mainpage/systemhistory/' // NOTE: domain routes to app.js
      // NOTE: use same domain if all controllers/factories use same table, then can relate to same routesJS file using same domain
    }).then(function(response) {
      console.log('factory.js/function-GET/history/response.data = ', typeof response.data, response.data);
      factoryHistory.list = response.data; // NOTE: THIS IS THE DATABASE RETURNED DATA
      // NOTE: Ensure factoryHistory points to an object property (.list)
      // NOTE: .data pulls only results from server & not other response information
    });
  } // NOTE: for: function getHistory
  // NOTE: After this GET, should have an array on DOM

  // NOTE: Delete System History and Parts Data
  function deleteHistory(historyid) {
    $http({
      method: 'DELETE',
      url: '/mainpage/systemhistory/delete' + historyid // NOTE: changing path resulted with this error: DELETE http://localhost:5500/mainpage/deleteMustMatc26 404 (Not Found)
    }).then(function(response) {
      getHistory();
    });
    console.log('systemhistory.factory.js delete ', historyid); // NOTE: 02: logging ok!
  } // NOTE: for: function deleteNameplate

  // NOTE: Add new System History and Parts Data
  function addHistory(addHistory) {
    console.log('addHistory = ', addHistory); // Note: this log equals the controllerJS console.log('self.newHistory: ', self.newHistory); // NOTE: Should be a filled-in object
    $http({
      method: 'POST',
      url: '/mainpage/systemhistory/add', // NOTE: Path must match route.JS path
      data: addHistory
    }).then(function(response) {
      getHistory();
    });
  } // NOTE: for: function addNameplate

    // NOTE: Edit System History and Parts Data
  function editHistory (editHistory) {
    console.log('editHistory function is run');
    $http({
      method: 'PUT',
      url: '/mainpage/systemhistory/edit' + editHistory.id,
      data: editHistory
    }).then(function(response) {
      getHistory();
    });
    console.log('editHistory.id', editHistory.id);
  } // NOTE: for: function editHistory




  return {
    // NOTE: returning $http function AND this area is the public API
    // controller connector: factory connector
    // NOTE: Nameplate Data //
    factoryHistoryToController: factoryHistory,
    addHistoryData: addHistory,
    deleteHistory: deleteHistory,
    editHistory: editHistory
  }; // NOTE: needs semi-colon!
}]); // NOTE: from soloProjectApp.factory function