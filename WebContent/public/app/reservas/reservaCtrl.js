/**
 *
 * @Author 
 */


(function(window, angular) {
	/* llamado del modulo */
	angular
		.module("Prestamos").controller('reservaCtrl',reservaCtrl);
	
	/*Inyeccion de las dependencias para el controlador*/
	reservaCtrl.$inject = ['Auth', 'Reserva'];
	
	
	function reservaCtrl(Auth, Reserva) {
		
		var vm = this;
		vm.usuario = Auth.getUsuario();
		vm.reservas = [];
		vm.mostrar = 0;
		vm.isCollapsed = false;
		
		vm.buscarPorCodigo = function() {
			console.log("buscar codigo " + vm.usuario.cedula);
			Reserva.buscarPorCodigo(vm.usuario.cedula,vm.codigo).then(function(data) {
				console.log("funciono " + JSON.stringify(data));
				vm.reservas = data;
				vm.mostrar = 1;
				vm.isCollapsed = true;
			}).catch(function(error) {
				console.log("error " + error);
			});
		}
		
		vm.buscarPorUsuario = function() {
			Reserva.misReservas(vm.cedula).then(function(data) {
				console.log("funciono " + JSON.stringify(data));
				vm.reservas = data;
				vm.mostrar = 2;
				vm.isCollapsed = true;
			}).catch(function(error) {
				console.log("error " + error);
			});
		}
		
		vm.aprobar = function(codigo) {
			console.log("aprobando reserva con codigo " + codigo);
			console.log("holaaaaaaa");
			Reserva.aprobar(vm.usuario.cedula, codigo).then(function() {
				if(vm.mostrar === 1){
					vm.reservas.aprobado = "true";
				}
				console.log("reserva Aprobada");
			}).catch(function(error) {
				console.log("error" + error);
			});
		}
		
		
	}
})(window, window.angular);