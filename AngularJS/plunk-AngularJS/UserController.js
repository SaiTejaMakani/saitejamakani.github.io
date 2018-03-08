var app = angular.module('githubViewer');

app.controller('UserController', function($scope, github, $routeParams) {

  var onUserComplete = function(data) {
    $scope.user = data;
    github.getRepos($scope.user).then(onRepos, onError);
  };

  var onRepos = function(data) {
    $scope.repos = data;
   
  };

  var onError = function(reason) {
    $scope.error = "Unable to fetch data, please check ur URL";
  };

  $scope.username = $routeParams.username;
  $scope.repoSortOrder = "-size";
  
  github.getUser($scope.username).then(onUserComplete, onError);


});