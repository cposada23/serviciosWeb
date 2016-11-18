/**
 * Controlador para la barra de navegacion, en este se realizan las funciones para autenticar 
 * y desautenticar un usuario. 
 * se inyectan:
 * Auth: servicio para la autenticacion de usuarios
 * $cookies: Para obtener los valores almacenados en las cookies
 * 
 */


(function(window, angular) {
	angular
		.module("Prestamos").controller("homeCtrl",homeCtrl);
	/*Inyeccion de las dependencias del controlador homeCtrl*/
	homeCtrl.$inject = ['Auth', '$cookies'];
	
	function homeCtrl(Auth, $cookies) {
		
		var vm = this;
		vm.autenticado = Auth.isAutenticado(); //Dice si el usuario esta autenticado o no
		vm.isAdmin = Auth.isAdmin();
		vm.usuario = {}; //Aca se guardan los datos que llegan a traves del formulario de login
		vm.usuarioActual =  $cookies.getObject('usuario')?$cookies.getObject('usuario').nombres:""; //En caso de que el usuario este autenticado accedo al nombre para el saludo
		
		/**
		 * Funcion que autentica un usuario, esta hace llamado al servicio Auth.login con los datos que se ingresan en el 
		 * formulario de login
		 */
		vm.autenticar = function() {
			Auth.login(vm.usuario).then(function(data) {
				//Por aca la autenticacion fue correcta la promesa se resolvio
				vm.usuarioActual =  data.nombres;
				vm.autenticado = Auth.isAutenticado();
				vm.isAdmin = Auth.isAdmin();
			}).catch(function(error) {
				//Autenticacion incorreca, la promesa se rechazó
				console.error("Error " + error);
			});
		};
		
		/**
		 * Funcion para desautenticar un usuario, esta hace un llamado al servicio Auth.logout
		 */
		vm.logout = function() {
			Auth.logout();
			vm.autenticado = Auth.isAutenticado();
			vm.isAdmin = Auth.isAdmin();
		};
	}
})(window, window.angular);