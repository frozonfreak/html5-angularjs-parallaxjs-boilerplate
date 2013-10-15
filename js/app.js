var smApp = angular.module('smApp',['ui.bootstrap','ui.router']);

smApp.config(function($stateProvider, $urlRouterProvider) {

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html",
      controller: 'appController',
    })
    // For any unmatched url, redirect to /state1
     $urlRouterProvider.otherwise("/404");

});
//controller
smApp.controller('appController', function($scope){

	$scope.taskList = [];
	$scope.task;
	$scope.taskDetail;
	$scope.deadLine;
	$scope.alerts = [];
	$scope.searchText;
	
  	//Initializer
	init();
	function init(){
		var scene = document.getElementById('scene');
		var parallax = new Parallax(scene);
		
	};
	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
	
});
smApp.run(function($window, $rootScope) {
     
      
});