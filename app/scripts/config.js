'use strict';

angular.module('contactsApp')
	.config(function($routeProvider){
		console.log('Config is called !!!');

	$routeProvider
		.when('/contacts',{
			controller: 'ListController',
			templateUrl: 'views/list-tpl.html'
		})
		.when('/contact/new',{
			controller: 'NewController',
			templateUrl: 'views/new-tpl.html'
		});	
});