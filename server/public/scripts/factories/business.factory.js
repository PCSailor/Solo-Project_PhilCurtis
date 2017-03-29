soloProjectApp.factory('BusinessFactory', ['$http', function($http) {
  console.log(new Date().getFullYear() + ' business.factory.js is run');
  var factoryBusiness = { list: [] }; // NOTE: data to controller AND must be property inside of object // NOTE: Will this code work inside controller, client.js also? YES
getBusiness();

// NOTE: GET Business Data
  function getBusiness () {
    console.log('function getBusiness() running before success'); // NOTE: 
    $http({
      method: 'GET',
      url: '/business/' // NOTE: domain routes to app.js
      // NOTE: use same domain if all controllers/factories use same table, then can relate to same routesJS file using same domain
    }).then(function(response) {
      console.log('factory.js/function GET/business/response.data = ', typeof response.data, response.data);
      factoryBusiness.list = response.data; // NOTE: THIS IS THE DATABASE RETURNED DATA
      // NOTE: Ensure factoryBusiness points to an object property (.list)
      // NOTE: .data pulls only results from server & not other response information
    });
  } // NOTE: for: function getBusiness
  // NOTE: After this GET, should have an array on DOM

// NOTE: Delete Business
  function deleteBusiness(businessid) {
    console.log('deleteBusiness = ', deleteBusiness);
    $http({
      method: 'DELETE',
      url: '/business/delete' + businessid // NOTE: changing path resulted with this error: DELETE http://localhost:5500/mainPage/deleteMustMatc26 404 (Not Found)
    }).then(function(response) {
      getBusiness();
    });
    console.log('delete from business.factory.js'); // NOTE: 02: logging ok!
  } // NOTE: for: function deleteBusiness

  // NOTE: Add new Business
  function addBusiness(addBusiness) {
    console.log('add Business = ', addBusiness); // Note: this log equals the controllerJS console.log('self.newBusiness: ', self.newBusiness); // NOTE: Should be a filled-in object
    $http({
      method: 'POST',
      url: '/business/add', // NOTE: Path must match route.JS path
      data: addBusiness
    }).then(function(response) {
      getBusiness();
    });
  } // NOTE: for: function addBusiness

    // NOTE: Edit a Business
  function editBusiness (editBusiness) {
    console.log('editBusiness function is run');
    $http({
      method: 'PUT',
      url: '/business/edit' + editBusiness.id,
      data: editBusiness
    }).then(function(response) {
      getBusiness();
    });
    console.log('editBusiness.id', editBusiness.id);
  } // NOTE: for: function editBusiness

return {
// NOTE: returning $http function AND this area is the public API
// controller connector: factory connector
   factoryBusinessToController: factoryBusiness,
    deleteBusiness: deleteBusiness,
    addBusiness: addBusiness,
    editBusiness: editBusiness

  }; // NOTE: needs semi-colon!
}]); // NOTE: from soloProjectApp.factory function