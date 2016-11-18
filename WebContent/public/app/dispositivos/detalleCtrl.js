(function (window, angular) {
    angular
        .module('Prestamos')
        .controller('detalleCtrl',detalleCtrl);
    	
    	detalleCtrl.$inject = ['$uibModalInstance','$scope','dis'];

        function detalleCtrl($uibModalInstance, $scope, dis) {
            $scope.dispositivo = dis;

            $scope.cancel = function() {
                $uibModalInstance.close('hola modal' +
                    '');
            }

        }
})(window, window.angular);