var app=angular.module("app",[]);
 
function SeguroController($scope) {
    
    //Objeto Notacion JSON
  $scope.seguro = {
    nif:"",
    nombre:"Marta",
    ape1:"",
    edad:33,
    sexo:"",
    casado:false,
    numHijos:0,
    embarazada:false,
    //es un objeto dentro del objeto seguro
    coberturas: {
      oftalmologia:false,
      dental:false,
      fecundacionInVitro:false
    },
    //es un objeto dentro del objeto seguro
    enfermedades:{
      corazon:false,
      estomacal:false,
      rinyones:false,
      alergia:false,
      nombreAlergia:""
    },
    fechaCreacion:new Date()
  };
  
  $scope.disabledNombreAlergia=function() {
  return ($scope.seguro.enfermedades.alergia===false);
  };
  /*También funciones con parametros*/
  
  $scope.suma=function(a,b) {
   return a+b;
   };
 //Funcion que recibe otra función
   $scope.isNegativo=function(c) {
  if (c<0) {
    return true;
  } else {
    return false;
  }
  };

};
/*<input ng-disabled="disabledNombreAlergia()" id="nombreAlergia"*/

/*<input ng-disabled="isNegativo(suma(seguro.edad,10))" id="nombreAlergia" name="*/
