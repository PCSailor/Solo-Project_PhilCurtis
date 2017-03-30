soloProjectApp.controller('SystemListController', ['SystemListFactory', function(SystemListFactory) {
    console.log(new Date().getFullYear() + ' systemlistcontroller.js is run');
    var self = this;
    self.systemListArrayList = [];
    self.systemListArrayList = SystemListFactory.factorySystemListToController;
    // self.newSystemList = {};


}]);