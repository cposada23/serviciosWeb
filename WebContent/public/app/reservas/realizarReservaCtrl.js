/**
 *
 * @Author  Camilo Posada Angel -- cposadaa@gmail.com
 */


(function(window, angular) {
	/* llamado del modulo */
	angular
		.module("Prestamos").controller('reslizarReservaCtrl',reslizarReservaCtrl);
	
	/*Inyeccion de las dependencias para el controlador*/
	reslizarReservaCtrl.$inject = ['$stateParams', 'Auth','Reserva'];
	
	
	function reslizarReservaCtrl($stateParams, Auth, Reserva) {
		
		var vm = this;
		
		vm.dispositivo = $stateParams.idDispositivo;
		vm.usuario = Auth.getUsuario();
		vm.habilitado = true;
		vm.options = {
		  //customClass: getDayClass,
		  minDate: new Date(),
		  showWeeks: true
		};
		vm.events = [];
		
		
		vm.reservar = function() {
			vm.habilitado = false;
			console.log("reservar");
			Reserva.reservar(vm.usuario.cedula, vm.dispositivo, vm.dt).then(function(data) {
				console.log("reserva realizada ");
			}).catch(function(error) {
				vm.habilitado = true;
				console.error("error" + error);
			});
		}
		
		
		
		
	}
})(window, window.angular);