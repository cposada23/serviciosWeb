/**
 * Definicion del modulo principal de la aplicacion, aqui se inyectan las dependencias de este
 * y se configura 
 * 
 * ui.router: Manejo de las rutas de la aplicacion, funciona parecido a ngRoute
 * ngCookies: Para persistencia en el navegador de los datos del usuario a traves de $cookies
 * @Author Camilo Posada Angel -- cposadaa@gmail.com
 */


(function(window, angular) {
	/* Creacion del modulo */
	angular
		.module("Prestamos",['ui.router', 'ngCookies', 'ui.bootstrap', 'angularSpinner']).config(config);
	
	/*Inyeccion de las dependencias para la configuracion de la app*/
	config.$inject = [ '$stateProvider','$urlRouterProvider'];
	
	/**
	 * Configuracion de la aplicación 
	 * @param $stateProvider
	 * @param $urlRouterProvider
	 * @returns
	 */
	function config($stateProvider,$urlRouterProvider) {
		
		
		$urlRouterProvider.otherwise('home'); //El estado por default es home
		 
		
		/* definicion de los estados de la aplicacion, es lo mismo que las rutas de la app */
		 $stateProvider
	        .state('Login',{
	            url:'/login',
	            templateUrl:'app/login/login.html',
	            controller:'loginCtrl as log'
	        })
	        .state('Home',{
	        	url:'/home',
	        	templateUrl:'app/home/home.html'
	        })
	        .state('Perfil',{
	        	url:'/perfil',
	        	templateUrl:'app/perfil/perfil.html',
	        	controller: 'perfilCtrl as perfil'
	        })
	        .state('AprobarReserva', {
	        	url:'/aprobar',
	        	templateUrl:'app/reservas/aprobar.html',
	        	controller: 'reservaCtrl as reserva'
	        })
	        .state('Reserva',{
	        	url:'/reservar',
	        	templateUrl:'app/reservas/reserva.html',
	        	controller:'reservaCtrl as reserva'
	        })
	        .state('RealisarReserva',{
	        	url:'/realizarReserva/:idDispositivo',
	        	templateUrl:'app/reservas/reservar.html',
	        	controller:'reslizarReservaCtrl as reserva'
	        })
	        .state('ListaDispositivos',{
	        	url:'/listaDispositivos',
	        	templateUrl:'app/dispositivos/dispositivo.html',
	        	controller: 'dispositivoCtrl as dispositivo'
	        })
	        .state('ListarReservas',{
	        	url:'/listaReservas',
	        	templateUrl:'app/reservas/listarMisReservas.html',
	        	controller: 'listarMisReservasCtrl as reserva'
	        })
	        .state('ListarPrestamos',{
	        	url:'/listaPrestamos',
	        	templateUrl:'app/prestamos/listarMisPrestamos.html',
	        	controller: 'prestamoCtrl as prestamo'
	        });
		
	}
})(window, window.angular);