/**
 *
 * @Author 
 */


(function(window, angular) {
	/* llamado del modulo */
	angular
		.module("Prestamos").controller('reservaCtrl',reservaCtrl);
	
	/*Inyeccion de las dependencias para el controlador*/
	reservaCtrl.$inject = ['Auth', 'Reserva','$http', 'Dispositivos','$uibModal'];
	
	
	function reservaCtrl(Auth, Reserva, $http ,Dispositivos, $uibModal) {
		
		var vm = this;
		vm.usuario = Auth.getUsuario();
		
		/** --------------------------------- Aprobar reservas --------------------------**/
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
					alert("Reserva aprobada");
				}
				console.log("reserva Aprobada");
			}).catch(function(error) {
				console.log("error" + error);
			});
		}
		/** ------------------------------------ Fin aprobar reservas ----------------------------------**/
		
		/** ------------------------------------ Listar dispositivos  ----------------------------------**/
		
		vm.listarDispositivos = function() {
			console.log("hola");
			Dispositivos.listarDispositivos().then(function(data) {
				console.log("data " + JSON.stringify(data));
				
				vm.lista = data;
			}).catch(function(error) {
				console.error("Error " + error);
			});;
			
		}
		vm.listarDispositivos();
		
		
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
		
		
		/** ------------------------------------ Fin listar           ----------------------------------**/
		
		/** ------------------------------------ Realizar reservas -------------------------------------**/
		

		 

		vm.options = {
		  //customClass: getDayClass,
		  minDate: new Date(),
		  showWeeks: true
		};
		vm.events = [];
				  
		  
		vm.fecha = function() {
			console.log("fecha " + vm.dt);
			$http.post('http://localhost:8080/ServiciosWeb/rest/ServicioReserva/realizarReserva?usuarioReserva=121212&dispositivo=5&fecha='+vm.dt).success(function(data) {
				console.log("success");
			}).error(function(error) {
				console.error(error);
			});
		}

		  
		
		 
		
	
		
		
		
	}
})(window, window.angular);