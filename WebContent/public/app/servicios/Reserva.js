/**
 *
 * @Author Camilo Posada Angel -- cposadaa@gmail.com
 */


(function(window, angular) {
	/* llamado del modulo */
	angular
		.module("Prestamos").factory('Reserva',Reserva);
	
	/*Inyeccion de las dependencias para el Servicio*/
	Reserva.$inject = ['$q', '$http'];
	
	
	function Reserva($q, $http) {
		
		return {
			misReservas: function(usuario, callback) {
				var cb = callback || angular.noop;
				var deferred =  $q.defer();
				/* metodo get al servicio web que retorna las reservas de un usuario  */
				$http.get('http://localhost:8080/ServiciosWeb/rest/ServicioReserva/misReservas?usuarioReserva='+usuario).success(function(data) {
					deferred.resolve(data); //Se resuelve la promesa con los datos del usuario
					return cb(); //Se vuelve a la funcion del controlador que halla llamado al servicio login
                    
				}).error(function(error) {
                    deferred.reject(error); //se rechaza la promesa
                    return cb(error); //Se vuelve a la funcion del controlador que halla llamado al servicio junto con el error
				});
				return deferred.promise; //Este servicio retorna una promesa			
			}, 
			buscarPorCodigo: function(usuarioBusca, codigo, callback) {
				var cb = callback || angular.noop;
				var deferred =  $q.defer();
				/* metodo get al servicio web que retorna una reserva dado su dodigo */
				$http.get('http://localhost:8080/ServiciosWeb/rest/ServicioReserva/verReserva?usuarioBusca='+usuarioBusca+'&reserva='+codigo).success(function(data) {
					deferred.resolve(data); //Se resuelve la promesa con los datos de la reserva
					return cb(); //Se vuelve a la funcion del controlador que halla llamado al servicio 
                    
				}).error(function(error) {
                    deferred.reject(error); //se rechaza la promesa
                    return cb(error); //Se vuelve a la funcion del controlador que halla llamado al servicio junto con el error
				});
				return deferred.promise; //Este servicio retorna una promesa	
			},
			aprobar: function(usuarioAprueba, codigo, callback) {
				var cb = callback || angular.noop;
				var deferred =  $q.defer();
				/* metodo get al servicio web para aprobar una reserva */
				$http.post('http://localhost:8080/ServiciosWeb/rest/ServicioReserva/AprobarReserva?usuarioAprueba='+usuarioAprueba+'&reserva='+codigo,{usuarioAprueba:usuarioAprueba,reserva:codigo}).success(function(data) {
					deferred.resolve(data); //Se resuelve la promesa con los datos de la reserva
					return cb(); //Se vuelve a la funcion del controlador que halla llamado al servicio 
                    
				}).error(function(error) {
                    deferred.reject(error); //se rechaza la promesa
                    return cb(error); //Se vuelve a la funcion del controlador que halla llamado al servicio junto con el error
				});
				return deferred.promise; //Este servicio retorna una promesa	
			}
		}
		
		
	}
})(window, window.angular);