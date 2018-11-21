var app = angular.module('paginacionApp.controladores',[]);

app.controller('observadorCtrl', ['$scope', function ($scope) {
//La idea de un observador es mantener la vista siempre puesta sobre una variable o sobre un objeto en concreto.

$scope.nombre = "Hulk Hogan";

$scope.$watch('nombre',function(valorNuevo,valorViejo) {
	//Así es como se declara un observador. Entre los paréntesis se pone el nombre de la variable que queremos observar si cambia algo, entre comillas, y la función que se quiere que se ejecute cuando la variable cambie. Esa función recibe los dos valores, el nuevo y el viejo.
	console.log(valorNuevo,valorviejo);
	//NOTA: AngularJS hace el trim de los espacios y no cuentan en cuanto a cambios se refiere.

});
	

}]);