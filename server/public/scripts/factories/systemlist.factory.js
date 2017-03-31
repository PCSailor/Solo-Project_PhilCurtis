soloProjectApp.factory('SystemListFactory', ['$http', function($http){
console.log(new Date().getFullYear() + ' systemlist.factory.js is run');
var systemListFactory = { list: [] };
getSystemList();

// GET System List
function getSystemList () {
console.log('function getSystemList() running before success');
$http({
    method: 'GET',
    url: '/systemlist/'
}).then(function(response) {
    console.log('factory.js/function-GET/systemlist/response.data = ', typeof response.data, response.data);
    systemListFactory.list = response.data;
});
}

// Delete System List
  function deleteSystemList(systemlistid) {
    $http({
      method: 'DELETE',
      url: '/systemlist/delete' + systemlistid // NOTE: changing path resulted with this error: DELETE http://localhost:5500/mainpage/deleteMustMatc26 404 (Not Found)
    }).then(function(response) {
      getSystemList();
    });
    console.log('systemlist.factory.js delete ', systemlistid); // NOTE: 02: logging ok!
  }

//    // Add new SystemList
//   function addSystemList(addSystemList) {
//     console.log('addSystemList before $http = ', addSystemList); // Note: this log equals the controllerJS console.log('self.newSystemList: ', self.newSystemList); // NOTE: Should be a filled-in object
//     $http({
//       method: 'POST',
//       url: '/systemlist/add', // NOTE: Path must match route.JS path
//       data: addSystemList
//     }).then(function(response) {
//       getSystemList();
//     });
//   }

//     // Edit SystemList
//   function editSystemList (editSystemList) {
//     console.log('editSystemList function is run');
//     $http({
//       method: 'PUT',
//       url: '/systemlist/edit' + editSystemList.id,
//       data: editSystemList
//     }).then(function(response) {
//       getSystemList();
//     });
//     console.log('editSystemList.id', editSystemList.id);
//   }

return { 
    factorySystemListToController: systemListFactory,
    deleteSystemList: deleteSystemList,
    // addSystemList: addSystemList,
    // editSystemList: editSystemList
}
}]);