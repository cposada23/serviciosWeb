/**
 *
 * @Author 
 */


(function(window, angular) {
	/* llamado del modulo */
	angular
		.module("Prestamos").controller('listarMisReservasCtrl',listarMisReservasCtrl);
	
	/*Inyeccion de las dependencias para el controlador*/
	listarMisReservasCtrl.$inject = ['Reserva', '$uibModal', 'Auth','usSpinnerService'];
	
	
	function listarMisReservasCtrl(Reserva, $uibModal, Auth, usSpinnerService) {
		var vm = this;
		
		vm.autenticado = Auth.isAutenticado;
		vm.lista  = [];
		vm.verDetalle = function(dispositivo) {
			console.log("dis "  + JSON.stringify(dispositivo));
			var modalInstance = $uibModal.open({
                templateUrl: 'app/reservas/detalle.html',
                controller: 'detalleCtrl',
                resolve: {
                    dis: function () {
                        return reserva;
                    }
                },
            });

            modalInstance.result.then(function(data) {
                //resolved
            }, function() {
                //rejected
            });
		}
		
		
		vm.listarReservas = function() {
			console.log("hola");
			  var cedula = Auth.getUsuario().cedula;
			Reserva.misReservas(cedula).then(function(data) {
				console.log("data " + JSON.stringify(data));
				vm.lista = Array.isArray(data.reservaWS)?data.reservaWS:[data.reservaWS];

			}).catch(function(error) {
				console.error("Error " + error);
			});;
			
		}
		vm.listarReservas();
	
		
		
	}
})(window, window.angular);