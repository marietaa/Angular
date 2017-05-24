var app = angular.module("app", []);
   
app.controller("SeguroController", ['$scope', '$log', function ($scope, $log) {
          $scope.seguro = {
                nif: "",
                nombre: "",
                ape1: "",
                edad: undefined,
                sexo: "",
                casado: false,
                numHijos: undefined,
                embarazada: false,
                coberturas: {
                      oftalmologia: false,
                      dental: false,
                      fecundacionInVitro: false
                },
                enfermedades: {
                      corazon: false,
                      estomacal: false,
                      rinyones: false,
                      alergia: false,
                      nombreAlergia: ""
                },
                fechaCreacion: new Date()
          };
   
        //    $log.warning("Acabamos de poner un warning");
          $log.debug("Acabamos de crear el $scope");
       // $log.warning("Acabamos de poner un warning");
   
    }]);

