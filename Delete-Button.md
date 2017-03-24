MAINPAGE.HTML
<td><button ng-click="mpc.deleteNameplate(nameplate.id)" class="btn btn-danger">X</button></td>

CLIENT.JS
.when('/mainPage', { // NOTE: this sets the actual domain(matched with nav.html)
  templateUrl: '/views/mainPage.html', // NOTE: this puts info on the DOM
  controller: 'mainPageController', // NOTE: controller value must match controller.js
  controllerAs: 'mpc' // NOTE: controller abbr
})

PAGES.FACTORY.JS
function deleteNameplate(nameplateid) {
  // console.log('deleteNameplate = ', deleteNameplate);
  $http({
    method: 'DELETE',
    // url: 'mainPage/nameplateData/delete' + nameplateid // NOTE: was: deleteNameplate
    url: '/mainPage/' + nameplateid // NOTE: was: deleteNameplate
  }).then(function(response) {
    getData();
  });
}

MAINPAGES.CONTROLLER.JS
self.deleteNameplate = function(nameplateid) {
console.log('Nameplate to delete: ', nameplateid);
  pagesFactory.deleteNameplate(nameplateid);
}

APP.JS
app.use('/mainPage', routesJS);
app.delete('mainPage/delete', routesJS)


ROUTES.JS
router.delete('/nameplateData/delete/:id', function(req, res) {
  var nameplateToDelete = req.params.id;
  console.log('RouteJS/RouternameplateToDelete = ', nameplateToDelete);
  pool.connect(function(err, client, done) { // NOTE: db query starts
    if(err) {
      console.log('RouteJS/Router.delete/Pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      client.query('DELETE FROM nameplate_data WHERE id=$1;',
      [nameplateToDelete], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
        done();
        if(err) {
          console.log('RouteJS/Router.delete/Pool.connect/db query-post error = ', err);
          res.sendStatus(500); // NOTE: error
        } else {
          res.sendStatus(201); // NOTE: Success
        } // NOTE: else
      }); // NOTE: client.query
    } // NOTE: else
  }); // NOTE: pool.connect
}); // NOTE: router.delete
