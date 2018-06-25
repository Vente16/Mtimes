# Mtimes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Api documentación
Api para el consumo de la aplicación (https://jvente18.000webhostapp.com).

Peticiones para le método `GET`

Retorna las notcias `https://jvente18.000webhostapp.com/noticias`


Retorna la información de una notcia `https://jvente18.000webhostapp.com/noticia/{id}` <br/>

Elimina una notcia `https://jvente18.000webhostapp.com/eliminarNoticia/{id}`<br/> 

Retorna las eventos `https://jvente18.000webhostapp.com/eventos`<br/>

Retorna la información de una evento `https://jvente18.000webhostapp.com/evento/{id}`<br/>

Elimina una evento `https://jvente18.000webhostapp.com/eliminarEvento/{id}`<br/>

Retorna las publicaciones `https://jvente18.000webhostapp.com/publicaciones`<br/>

Retorna la información de una publicación `https://jvente18.000webhostapp.com/publicacion/{id}`<br/>

Elimina una publicación `https://jvente18.000webhostapp.com/eliminarPublicacion/{id}`<br/><hr>

Peticiones para le método `POST`

Registra una nueva noticia `https://jvente18.000webhostapp.com/nuevaNoticia` <br>
Datos:<br>


` {
   "Titulo":"Ejemplo",
   "Descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio laboriosam magnam animi asperiores sit eum numquam sapiente ullam veniam ab laudantium eligendi, et laborum nisi impedit. Nisi sapiente, ipsa quia.",
   "Foto":"url de una imagen"
} `<br>


   

Actualizar una noticia `https://jvente18.000webhostapp.com/actualizarNoticia` <br/>
Datos:<br>
` {
   "Id": "1",
   "Titulo":"Ejemplo",
   "Descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio laboriosam magnam animi asperiores sit eum numquam sapiente ullam veniam ab laudantium eligendi, et laborum nisi impedit. Nisi sapiente, ipsa quia.",
   "Foto":"url de una imagen"
} `<br>


Registra una nueva publicación `https://jvente18.000webhostapp.com/nuevaPublicacion` <br>

Datos: <br>


` {
   "Titulo":"Ejemplo",
   "Descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio laboriosam magnam animi asperiores sit eum numquam sapiente ullam veniam ab laudantium eligendi, et laborum nisi impedit. Nisi sapiente, ipsa quia.",
   "Foto":"url de una imagen"
} `<br>


Actualizar una publicación `https://jvente18.000webhostapp.com/actualizarPublicacion` <br>

Datos: <br>

` {
   "Id": "1",
   "Titulo":"Ejemplo",
   "Descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio laboriosam magnam animi asperiores sit eum numquam sapiente ullam veniam ab laudantium eligendi, et laborum nisi impedit. Nisi sapiente, ipsa quia.",
   "Foto":"url de una imagen"
} `<br>



Registra una nueva evento `https://jvente18.000webhostapp.com/nuevaEvento` <br>

Datos: <br>

`{
   "Nombre":"Ejemplo",
   "Descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio laboriosam magnam animi asperiores sit eum numquam sapiente ullam veniam ab laudantium eligendi, et laborum nisi impedit. Nisi sapiente, ipsa quia.",
   "Foto":"url de una imagen",
   "Fecha":"2018-24-06",
   "Lugar":"Lugar del evento",
   "Hora":"14:00"
}
`<br>

Actualizar una publicación `https://jvente18.000webhostapp.com/actualizarEvento`<br>

Datos:<br>

`{
   "Id": "1",
   "Nombre":"Ejemplo",
   "Descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio laboriosam magnam animi asperiores sit eum numquam sapiente ullam veniam ab laudantium eligendi, et laborum nisi impedit. Nisi sapiente, ipsa quia.",
   "Foto":"url de una imagen",
   "Fecha":"2018-24-06",
   "Lugar":"Lugar del evento",
   "Hora":"14:00"
}
`

