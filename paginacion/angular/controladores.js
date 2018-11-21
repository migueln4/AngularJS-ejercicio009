var app = angular.module('paginacionApp.controladores',[]);

app.controller('paisesCtrl', ['$scope','Paises', function($scope,Paises){
	//Se debe hacer la importación del servicio Paises. Esto es importante tenerlo siempre en cuenta.

	$scope.paises = Paises;

	$scope.irUltimo = function() {

		Paises.cargarUltima();

	}

	$scope.irPrimera = function() {
		Paises.cargarPrimera();
	}

	$scope.irA = function(numPagina) {
		Paises.irA(numPagina);
	}

	$scope.arrayPaginas = function(num) {
		var arraySalida = [];

		for(var i = 0; i< num; i++) {
			arraySalida.push(i+1);
		}

		return arraySalida;
	}
		
}]);