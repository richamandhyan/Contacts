'use strict';

var contacts = [{
			firstName: ['Richa', 'text'],
			lastName: ['M', 'text']
		},{
			firstName: ['Safia', 'text'],
			lastName: ['N', 'text']
		},
		{
			firstName:['Venkatesh', 'text'],
			lastName: ['N', 'text']
		},
		{
			firstName:['Kaushik', 'text'],
			lastName: ['C', 'text']
		}];

angular.module('contactsApp')
	.controller('ListController',function($rootScope, $scope,$location){

		console.log('Inside Controller');

		$scope.contacts = contacts
		
		$scope.fields = Object.keys($scope.contacts[0]);

		$scope.sort = function(field){
			console.log(field);
			$scope.sort.field = field;
			$scope.sort.order = !$scope.sort.order;
		};

		//defaults
		$scope.sort.field = 'firstName';
		$scope.sort.order = false;

		$scope.add = function(){
			console.log("the page moves");
			$location.url('contact/new');
		}

		$rootScope.$on('save:contact', function(e, data){
			console.log('Received: save Contact msg');

		})
	})
	.controller('NewController', function($rootScope, $scope, ContactCreator,$location){

		$scope.contact = ContactCreator.getInstance();
		$scope.save = function(contact){
			console.log(contact);
			contacts.push(contact);
			$location.url('/contacts');
			
		}

	});

	







