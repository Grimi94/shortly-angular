angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  $scope.data = { links : ['test'] };
  $scope.getLinks = function(){
    Links.getLinks().then(function(data){
      $scope.data.links = data;
      console.log(data);
    });
  };
  $scope.getLinks();

});
