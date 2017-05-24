

var app = angular.module("app", []);

function pruebaControlador($scope) {

    $scope.mensaje = "Hola Sol";
    $scope.mensaje2 = "Es de dia";

    $scope.cambiarMensaje2 = function(){
        $scope.mensaje = "Hola Luna";
        $scope.mensaje2 = "Es de noche";
    };
};






