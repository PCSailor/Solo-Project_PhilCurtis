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
  function deleteUsernotes(usernotesid) {
swal({
  title: "Are you sure?",
  text: "You will not be able to recover this user note!",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Yes, delete it!",
  closeOnConfirm: false
},
function(){
     $http({
      method: 'DELETE',
      url: '/usernotes/delete' + usernotesid
    }).then(function(response) {
      getUsernotes();
    });
  swal("Deleted!", "Your file has been deleted.", "success");
});
 }


   // NOTE: Add new Usernotes
  function addUsernotes(addUsernotes) {
    console.log('addUsernotes before $http = ', addUsernotes); // Note: this log equals the controllerJS console.log('self.newUsernotes: ', self.newUsernotes); // NOTE: Should be a filled-in object
    $http({
      method: 'POST',
      url: '/usernotes/add', // NOTE: Path must match route.JS path
      data: addUsernotes
    }).then(function(response) {
      getUsernotes();
    });
  }
    // NOTE: Edit Usernotes
  function editUsernotes (editUsernotes) {
    console.log('editUsernotes function is run');
    $http({
      method: 'PUT',
      url: '/usernotes/edit' + editUsernotes.id,
      data: editUsernotes
    }).then(function(response) {
      getUsernotes();
    });
    console.log('editUsernotes.id', editUsernotes.id);
  } // NOTE: for: function editUsernotes
return {
    factoryUsernotesToController: factoryUsernotes,
    addUsernotes: addUsernotes,
    deleteUsernotes: deleteUsernotes,
    editUsernotes: editUsernotes
}
}]);
