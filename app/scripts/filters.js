'use strict';

angular.module('contactsApp')
	.filter('labelCase', function(){
		return function(input){
			input = input.replace(/([A-Z])/g, ' $1');
			console.log(input);
			return input[0].toUpperCase() + input.slice(1);
		}
	})
	.filter('filterKey', function(){
		return function(obj,query){
			var newObj={};
			
			angular.forEach(obj, function(v,k){
				if(k !== query){
					newObj[k] = v;
				}
			})

			// Object.keys(obj).forEach(function(key){
			// 	if(key !== query){
			// 		newObj[key] = obj[key];
			// 	}
			// })
			return newObj;
		};
	})