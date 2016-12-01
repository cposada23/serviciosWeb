/**
 *
 * @Author 
 */


(function(window, angular) {
	/* llamado del modulo */
	angular
		.module("Prestamos").controller('prestamoCtrl',prestamoCtrl);
	
	/*Inyeccion de las dependencias para el controlador*/
	prestamoCtrl.$inject = ['Auth', 'Prestamo'];
	
	
	function prestamoCtrl(Auth, Prestamo) {
		
		console.log("prestamossss");
		var vm = this;
		vm.lista = [];
		vm.listarReservas = function() {
			console.log("hola");
			  var cedula = Auth.getUsuario().cedula;
			Prestamo.misPrestamos(cedula).then(function(data) {
				vm.lista = Array.isArray(data.prestamoWS)?data.prestamoWS:[data.prestamoWS];
				console.log("data " + JSON.stringify(data));
				console.log("vm.lista: " + JSON.stringify(vm.lista));
			}).catch(function(error) {
				console.error("Error " + error);
			});;
			
		}
		vm.listarReservas();
		
	}
})(window, window.angular);