soloProjectApp.factory('SystemListFactory', ['$http', function($http){
console.log(new Date().getFullYear() + ' systemlist.factory.js is run');
var systemlistFactory = { list: [] };
getSystemList();

// GET System List
function getSystemList () {
console.log('function getSystemList() running before success');
$http({
    method: 'GET',
    url: '/systemlist/'
}).then(function(response) {
    console.log('factory.js/function-GET/systemlist/response.data = ', typeof response.data, response.data);
    factorySystemList.list = response.data;
});
}
return { factorySystemListToController: systemListFactory }
}]);