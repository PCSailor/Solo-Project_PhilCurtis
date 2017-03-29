soloProjectApp.factory('UserNotesFactory', ['$http', function($http) {
    console.log(new Date().getFullYear() + ' usernotes.factory.js is run');
var factoryUsernotes = { list: [] };
getUsernotes();

 // NOTE: GET User Notes
 function getUsernotes () {
    console.log('function getUsernotes() running before success');
    $http({
      method: 'GET',
      url: '/usernotes/'
    }).then(function(response) {
      console.log('factory.js/function-GET/usernotes/response.data = ', typeof response.data, response.data);
      factoryUsernotes.list = response.data; // NOTE: DATABASE RETURNED DATA
    });
  }

// NOTE: Delete System Usernotes
//   function deleteUsernotes(usernotesid) {
//     $http({
//       method: 'DELETE',
//       url: '/usernotes/delete' + usernotesid // NOTE: changing path resulted with this error: DELETE http://localhost:5500/mainpage/deleteMustMatc26 404 (Not Found)
//     }).then(function(response) {
//       getUsernotes();
//     });
//     console.log('usernotes.factory.js delete ', usernotesid); // NOTE: 02: logging ok!
//   }

//    // NOTE: Add new Usernotes
//   function addUsernotes(addUsernotes) {
//     console.log('addUsernotes before $http = ', addUsernotes); // Note: this log equals the controllerJS console.log('self.newUsernotes: ', self.newUsernotes); // NOTE: Should be a filled-in object
//     $http({
//       method: 'POST',
//       url: '/usernotes/add', // NOTE: Path must match route.JS path
//       data: addUsernotes
//     }).then(function(response) {
//       getUsernotes();ßßßß
//     });
//   }
//     // NOTE: Edit Usernotes
//   function editUsernotes (editUsernotes) {
//     console.log('editUsernotes function is run');
//     $http({
//       method: 'PUT',
//       url: '/usernotes/edit' + editUsernotes.id,
//       data: editUsernotes
//     }).then(function(response) {
//       getUsernotes();
//     });
//     console.log('editUsernotes.id', editUsernotes.id);
//   } // NOTE: for: function editUsernotes
return {
    factoryUsernotesToController: factoryUsernotes,
    // addUsernotes: addUsernotes,
    // deleteUsernotes: deleteUsernotes,
    // editUsernotes: editUsernotes
}
}]);
