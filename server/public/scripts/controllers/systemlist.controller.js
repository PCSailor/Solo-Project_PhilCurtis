soloProjectApp.controller('SystemListController', ['SystemListFactory', function(SystemListFactory) {
    console.log(new Date().getFullYear() + ' systemlistcontroller.js is run');
    var self = this;
    self.systemListArrayList = [];
    self.systemListArrayList = SystemListFactory.factorySystemListToController;
    self.newSystemList = {};

    self.deleteSystemList = function(systemListid) {
    console.log('systemList.controller.js delete: ', systemListid);
    SystemListFactory.deleteSystemList(systemListid);
  };
//   self.addSystemList = function() {
//     console.log('self.newSystemList: ', self.newSystemList); // Note: this log equals the controllerJS console.log('addHistory = ',); // NOTE: Should be a filled-in object
//     SystemListFactory.addSystemList(self.newSystemList);
//     self.newSystemList = {};
//   };
//    self.editSystemList = function(edited) {
//     SystemListFactory.editSystemList(edited);
//     console.log('systemList.controller.js is sending edited data: ', typeof self.editSystemList, " and ", typeof edited, edited);
//     };

}]);