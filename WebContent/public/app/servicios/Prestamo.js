/**
 *
 * @Author Camilo Posada Angel -- cposadaa@gmail.com
 */


(function(window, angular) {
	/* llamado del modulo */
	angular
		.module("Prestamos").factory('Prestamo',Prestamo);
	
	/*Inyeccion de las dependencias para el Servicio*/
	Prestamo.$inject = ['$q', '$http'];
	
	
	function Prestamo($q, $http) {
		
		return {
			misPrestamos: function(usuario, callback) {
				var cb = callback || angular.noop;
				var deferred =  $q.defer();
				/* metodo get al servicio web que retorna las reservas de un usuario  */
				$http.get('http://localhost:8080/ServiciosWeb/rest/ServicioPrestamo/BuscarPrestamos?usuarioPresta='+usuario).success(function(data) {
					deferred.resolve(data); //Se resuelve la promesa con los datos del usuario
					return cb(); //Se vuelve a la funcion del controlador que halla llamado al servicio login
                    
				}).error(function(error) {
                    deferred.reject(error); //se rechaza la promesa
                    return cb(error); //Se vuelve a la funcion del controlador que halla llamado al servicio junto con el error
				});
				return deferred.promise; //Este servicio retorna una promesa			
			}
		}
		
		
	}
})(window, window.angular);