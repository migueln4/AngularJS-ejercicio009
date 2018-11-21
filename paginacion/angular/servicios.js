var app = angular.module('paginacionApp.servicios',[]);

//Cuando el controlador llame al servicio, el servicio empieza a recorrer todo y, cuando llegue al final, va a encontrarse con la llamada a la función en la que se le pide que cargue toda la data.

app.factory('Paises', ['$http', function($http){

	var self = {
			cargando:false, //esto sirve para comprobar que se esté cargando la página
			pagina:1, //Cuál esl a página que quiero
			total:0, //El total de elementos que vamos a obtener de la base de datos
			totalpaginas:0,
			data:[],

			irA:function(pagPedida) {
				self.cargarData({
					pagina:pagPedida
				});
			},

			cargarUltima: function() { //Esta función tiene que conseguir la última página

				self.cargarData({
					pagina: self.totalpaginas //Ya sabemos cuántas hay porque la primera vez que se entra en el servicio acaba llamando a cargarData y ahí guarda el número total de páginas.

				});

			}, //Importantísima la coma porque esto está dentro del objeto self y estamos determinando funcionalidades dentro de él.

			cargarPrimera:function() {
				self.cargarData({
					pagina:1
				});
			},


			cargarData:function(opciones) { //Dentro del objeto también se pueden añadir funciones.

				self.cargando = true; //Se pone a true porque, en este preciso momento, cuando se invoque esta función, se pone a cargar.

				self.pagina = opciones.pagina; //La página que llega es la que le hemos dicho por defecto en el mismo controlador.

				$http.post('php/servicios/paises.getPaises.php',opciones) //Lo que se le envía depende de cómo está escrito el servicio GET en PHP
				.success(function(respuesta) { //Todo lo que devuelve el archivo php se guarda en respuesta

					console.log(respuesta);

					self.cargando = false; //Se pone a false porque ya se ha cogido toda la información del php

					self.totalpaginas = respuesta.totalpaginas;

					self.total = respuesta.total;

					self.data = respuesta.data;

				})
				.error(function(respuesta) {

					console.error(respuesta);

				});

			}
		} //El nombre de self es un estándar.

		var defecto = { //Esto son las opciones por defecto que le vamos a marcar a la paginación.
			pagina:1
		};

		self.cargarData(defecto); //Lo primero que hace el controlador es cargar la data.

		return self; //Siempre hay que devolver algo con lo que se trabaja.

	}])