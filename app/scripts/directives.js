'use strict';

angular.module('contactsApp')
.directive('venkiField',function(){

	return {
		templateUrl: 'views/venki-field.html',
		restrict: 'E',
		replace: true,
		scope: {
			record: '=',
			field: '@',
			required: '@' 
		},
		link: function($scope, element, attrs){
			console.log('Within Directive link function!!' + attrs);

			$scope.remove = function(field){
				delete $scope.record[field];
			}
		}
	};
})