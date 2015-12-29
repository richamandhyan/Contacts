'use strict';

angular.module('contactsApp')
.factory('ContactCreator', function(){

	var Contact = function(){
		//defaults
		this.firstName = ['', 'text'];
		this.lastName = ['', 'text'];
		this.email = ['', 'email'];
		this.age = ['', 'number'];
		this.cell = ['','tel'];
	}

	return{
		getInstance : function(){
			return new Contact();
		}
	};
});