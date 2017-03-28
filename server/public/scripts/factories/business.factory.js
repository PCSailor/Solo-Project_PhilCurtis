soloProjectApp.factory('businessFactory', ['$http', function($http) {
  console.log(new Date().getFullYear() + ' business.factory.js is run');
  var factoryBusiness = { list: [] }; // NOTE: data to controller AND must be property inside of object // NOTE: Will this code work inside controller, client.js also? YES
getBusiness();

// NOTE: GET Nameplate Data
  function getBusiness () {
    console.log('function getBusiness() running before success'); // NOTE: 
    $http({
      method: 'GET',
      url: '/businesspage/' // NOTE: domain routes to app.js
      // NOTE: use same domain if all controllers/factories use same table, then can relate to same routesJS file using same domain
    }).then(function(response) {
      console.log('factory.js/function GET/business/response.data = ', typeof response.data, response.data);
      factoryBusiness.list = response.data; // NOTE: THIS IS THE DATABASE RETURNED DATA
      // NOTE: Ensure factoryBusiness points to an object property (.list)
      // NOTE: .data pulls only results from server & not other response information
    });
  } // NOTE: for: function getBusiness
  // NOTE: After this GET, should have an array on DOM







return {
// NOTE: returning $http function AND this area is the public API
// controller connector: factory connector
    factorybusinessToController: factoryBusiness
  }; // NOTE: needs semi-colon!
}]); // NOTE: from soloProjectApp.factory function