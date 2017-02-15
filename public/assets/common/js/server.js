
angular.module('myapp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('layout', {
         url: '/layout',
        templateUrl: 'views/layout.ejs'
      })
    .state('layout.login', {
        url: '/login',
        templateUrl: 'views/account/login.ejs',
        controller:'AppCtrl'
   
      })

$urlRouterProvider.otherwise('layout/login');
      
   })
 .controller('AppCtrl', function($scope) {


 	$scope.submitForm = function() {
alert('yes');
			// check to make sure the form is completely valid
			if ($scope.userForm.$valid) {
				alert('our form is amazing');
			}

		};



 })
