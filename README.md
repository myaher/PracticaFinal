# Arquitectura 

Desde el frontend, con Angular hacemos llamadas AJAX a nuestra API en el servidor Node. Este consulta al archivo CSV. Este devuelve el objeto como respuesta a Node y este lo sirve como JSON a Angular que lo muestra en el frontend sin necesidad de recargar la página, creando así una Single Page Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Tratamiento de Datos

Para la carga de datos, limpieza, y depuración de datos, se utilizo Jupyter Notebook, se incluye el archivo “\Server\CargaDatosVisualizacion.ipynb”, donde se realiza el procedimiento de depuración, se generan los datos del grafico (año vs cantidad de Victimas), el archivo “\Server\Victims.csv”

## Development server

Inicializar el servicio el js, para la carga de datos.  >  node miserver.js

Validar la carga de datos navegando: http://localhost:3000/data

Correr el comando npm start para subir angular, navegar http://localhost:4200/.


