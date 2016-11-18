/**
 * Servicio para manejo de todas las funciones que tengan que ver con la autenticacion de los usuarios
 * se injecta:
 * $q: para las promesas
 * $http: para la comunicacion con los servicios web
 * $cookies: para almacenar la informacion del usuario cuando este hace login correcto
 * @Author Camilo Posada Angel -- cposadaa@gmail.com
 */


(function(window, angular) {
	angular
		.module("Prestamos").factory("Auth",Auth);
	/* inyección de las dependencias del servicio */
	Auth.$inject = ['$q', '$http', '$cookies'];
	
	function Auth($q, $http, $cookies) {
		var autenticado = false;
		return {
			/**
			 * Funcion para la autenticacion de los usuarios, en esta se hace el uso de promesas -> $q
			 * esto con el fin de obtener la informacion de los usuarios cuando el servicio responda correctamente
			 * y asi poder almacenarlo en $cookies
			 * 
			 * Retorna los datos del usuario si este se autentica correctamente, de lo contrario 
			 * 		   retornara un error y en $cookies no se almacena nada
			 */
			
			login: function(usuario, callback) {
				var cb = callback || angular.noop;
				var deferred =  $q.defer();
				/* metodo get al servicio web que valida email y contraseña de un investigador */
				$http.get('http://localhost:8080/ServiciosWeb/rest/ServicioUsuarios/autenticar?email='+usuario.email+'&contrasena='+usuario.password).success(function(data) {
					deferred.resolve(data); //Se resuelve la promesa con los datos del usuario
                    console.log("usuario " + JSON.stringify(data));
                    $cookies.putObject('usuario', data);
                    $cookies.put('autenticado', true);
                    $cookies.put('nombre', data.nombres);
                    autenticado = true;
					return cb(); //Se vuelve a la funcion del controlador que halla llamado al servicio login
                    
				}).error(function(error) {
                    deferred.reject(error); //se rechaza la promesa
                    return cb(error); //Se vuelve a la funcion del controlador que halla llamado al servicio junto con el error
				});
				return deferred.promise; //Este servicio retorna una promesa
			},
			
			/**
			 * Función para desautenticar un usuario, en esta simplemente se remueve los datos del usuario de $cookies
			 * y autenticado queda con el valor de false
			 */
			logout: function() {
				usuario = {};
				autenticado = false;
				$cookies.remove('usuario');
				$cookies.remove('autenticado');
			},
			getUsuario: function() {
				return usuario;
			},
			
			
			/**
			 * Función que retorna si un usuario se ha autenticado correctamente en la aplicación 
			 */
			isAutenticado: function() {
				if($cookies.get('autenticado')){
					return $cookies.get('autenticado');
				}
				return autenticado;
			},
			
			isAdmin: function() {
				if($cookies.getObject('usuario')){
					return $cookies.getObject('usuario').rol === "ADM";
				}
				return false;
			}
		}
	}
})(window, window.angular);