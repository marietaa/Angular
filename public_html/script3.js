var app = angular.module("ejercicio", []);
function controladorPrincipal ($scope) {

//Creamos un objeto JSON, datos del formulario
    $scope.datos = {
        nombre: "Maria",
        apellido: "Puertolas Pesquer",
        edad: 37,
        
        educacion: {

            primaria: true,
            secundaria: false,
            universidad: false
        }


    };
    
    $scope.cargarDatos=function(){
        
        $scope.datos.nombre="Vega";
        $scope.datos.apellido="Saez Puertolas";
        $scope.datos.edad=6;
        $scope.datos.educacion.primaria=false;
        $scope.datos.educacion.secundaria=true;
        
    };
}


