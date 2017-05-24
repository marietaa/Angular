var app=angular.module("app",[]);
  //El controlador ahora es la funcion controller de Angular
//que se añade al módulo y no una función como en ejemplos anteriores
app.controller("SeguroController",function($scope) {
  $scope.seguro={
    nif:"",
    nombre:"",
    ape1:"",
    edad:undefined,
    sexo:"",
    casado:false,
    numHijos:undefined,
    embarazada:false,
    coberturas: {
      oftalmologia:false,
      dental:false,
      fecundacionInVitro:false
    },
    enfermedades:{
      corazon:false,
      estomacal:false,
      rinyones:false,
      alergia:false,
      nombreAlergia:""
    },
    fechaCreacion:new Date()
  };
});

