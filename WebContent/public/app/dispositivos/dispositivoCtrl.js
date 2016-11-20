/**
 *
 * @Author 
 */


(function(window, angular) {
	/* llamado del modulo */
	angular
		.module("Prestamos").controller('dispositivoCtrl',dispositivoCtrl);
	
	/*Inyeccion de las dependencias para el controlador*/
	dispositivoCtrl.$inject = ['Dispositivos', '$uibModal', 'Auth','usSpinnerService'];
	
	
	function dispositivoCtrl(Dispositivos, $uibModal, Auth, usSpinnerService) {
		var vm = this;
		
		vm.autenticado = Auth.isAutenticado;
		
		vm.verDetalle = function(dispositivo) {
			console.log("dis "  + JSON.stringify(dispositivo));
			var modalInstance = $uibModal.open({
                templateUrl: 'app/dispositivos/detalle.html',
                controller: 'detalleCtrl',
                resolve: {
                    dis: function () {
                        return dispositivo;
                    }
                },
            });

            modalInstance.result.then(function(data) {
                //resolved
            }, function() {
                //rejected
            });
		}
		
		
		vm.listarDispositivos = function() {
			console.log("hola");
			  usSpinnerService.spin('spinner-1');
			Dispositivos.listarDispositivos().then(function(data) {
				console.log("data " + JSON.stringify(data));
				
				vm.lista = data;
			}).catch(function(error) {
				console.error("Error " + error);
				 usSpinnerService.stop('spinner-1');
			});;
			
		}
		vm.listarDispositivos();
	
		
		
	}
})(window, window.angular);