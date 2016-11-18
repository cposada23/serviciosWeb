/**
 *
 * @Author 
 */


(function(window, angular) {
	/* llamado del modulo */
	angular
		.module("Prestamos").factory('Dispositivos',Dispositivos);
	
	/*Inyeccion de las dependencias para el controlador*/
	Dispositivos.$inject = ['$q', '$http'];
	
	
	function Dispositivos($q, $http) {
		
		return {
			listarDispositivos: function(callback) {
				var cb = callback || angular.noop;
				var deferred =  $q.defer();
				/* metodo get al servicio web que valida email y contraseña de un investigador */
				$http.get('http://localhost:8080/ServiciosWeb/rest/ServicioDispositivo/ListarDispositivos').success(function(data) {
					deferred.resolve(data); //Se resuelve la promesa con los datos del usuario
                    console.log("dispositivos " + JSON.stringify(data));
                  
                    autenticado = true;
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