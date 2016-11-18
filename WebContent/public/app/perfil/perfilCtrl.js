/**
 *
 * @Author Camilo Posada Angel -- cposadaa@gmail.com
 */


(function(window, angular) {
	
	angular
		.module("Prestamos").controller("perfilCtrl",perfilCtrl);
	
	/*Inyeccion de las dependencias para el controlador del perfil*/
	perfilCtrl.$inject = [ '$cookies'];
	
	function perfilCtrl($cookies) {
		var vm = this;
		vm.usuario = $cookies.getObject('usuario');
		
		
	}
})(window, window.angular);