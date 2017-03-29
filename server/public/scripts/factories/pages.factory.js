soloProjectApp.factory('pagesFactory', ['$http', function($http) {
  console.log(new Date().getFullYear() + ' pages.factory.js is run');
  // NOTE: Drop-down needed on 2 different controller.js files = good candidate for factoryJS files
    // NOTE: Factoryis a dependency controller.JS needs requiring return (at end of this file)
  // NOTE: $http is ajax jump from F/E logic to server AND catches the factory request as glue between factory & server
}]); // NOTE: from soloProjectApp.factory function
