/**
 *
 * @Author 
 */


(function(window, angular) {
	/* llamado del modulo */
	angular
		.module("Prestamos").controller('listaPrestamosCtrl',listaPrestamosCtrl);
	
	/*Inyeccion de las dependencias para el controlador*/
	listaPrestamosCtrl.$inject = ['Prestamo', '$uibModal', 'Auth','usSpinnerService'];
	
	
	function listaPrestamosCtrl(Prestamo, $uibModal, Auth, usSpinnerService) {
		var vm = this;
		
		vm.autenticado = Auth.isAutenticado;
		
		vm.verDetalle = function(reserva) {
			console.log("dis "  + JSON.stringify(reserva));
			var modalInstance = $uibModal.open({
                templateUrl: 'app/prestamos/detalle.html',
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
			  usSpinnerService.spin('spinner-1');
			  var cedula = Auth.getUsuario().cedula;
			Prestamo.misPrestamos(cedula).then(function(data) {
				console.log("data " + JSON.stringify(data));
				
				vm.lista = data;
			}).catch(function(error) {
				console.error("Error " + error);
				 usSpinnerService.stop('spinner-1');
			});;
			
		}
		vm.listarReservas();
	}
})(window, window.angular);