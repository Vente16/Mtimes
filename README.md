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
Retorna la información de una notcia `https://jvente18.000webhostapp.com/noticia/{id}`
Elimina una notcia `https://jvente18.000webhostapp.com/eliminarNoticia/{id}`

Retorna las eventos `https://jvente18.000webhostapp.com/eventos`
Retorna la información de una evento `https://jvente18.000webhostapp.com/evento/{id}`
Elimina una evento `https://jvente18.000webhostapp.com/eliminarEvento/{id}`

Retorna las publicaciones `https://jvente18.000webhostapp.com/publicaciones`
Retorna la información de una publicación `https://jvente18.000webhostapp.com/publicacion/{id}`
Elimina una publicación `https://jvente18.000webhostapp.com/eliminarPublicacion/{id}`

Peticiones para le método `POST`

Registra una nueva noticia `https://jvente18.000webhostapp.com/nuevaNoticia`
Datos:
```json
     {
        "Titulo": "Ejemplo",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio laboriosam magnam animi asperiores sit eum numquam sapiente ullam veniam ab laudantium eligendi, et laborum nisi impedit. Nisi sapiente, ipsa quia.",
        "Foto": "url de una imagen"

     }
    ```

Actualizar una noticia `https://jvente18.000webhostapp.com/actualizarNoticia`
Datos:
```json
     {
     	"Id": "1",
        "Titulo": "Ejemplo acualizado",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio laboriosam magnam animi asperiores sit eum numquam sapiente ullam veniam ab laudantium eligendi, et laborum nisi impedit. Nisi sapiente, ipsa quia.",
        "Foto": "url de una imagen acutualizada"

     }
    ```

Registra una nueva publicación `https://jvente18.000webhostapp.com/nuevaPublicacion`
Datos:
```json
     {
        "Titulo": "Ejemplo",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio laboriosam magnam animi asperiores sit eum numquam sapiente ullam veniam ab laudantium eligendi, et laborum nisi impedit. Nisi sapiente, ipsa quia.",
        "Foto": "url de una imagen"

     }
    ```

Actualizar una publicación `https://jvente18.000webhostapp.com/actualizarPublicacion`
Datos:
```json
     {
     	"Id": "1",
        "Titulo": "Ejemplo acualizado",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio laboriosam magnam animi asperiores sit eum numquam sapiente ullam veniam ab laudantium eligendi, et laborum nisi impedit. Nisi sapiente, ipsa quia.",
        "Foto": "url de una imagen acutualizada"

     }
    ```


Registra una nueva evento `https://jvente18.000webhostapp.com/nuevaEvento`
Datos:
```json
     {
        "Nombre": "Ejemplo",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio laboriosam magnam animi asperiores sit eum numquam sapiente ullam veniam ab laudantium eligendi, et laborum nisi impedit. Nisi sapiente, ipsa quia.",
        "Foto": "url de una imagen",
        "Fecha": "2018-24-06",
        "Lugar": "Lugar del evento",
        "Hora": "14:00"

     }
    ```

Actualizar una publicación `https://jvente18.000webhostapp.com/actualizarEvento`
Datos:
```json
     {
     	"Id": "1",
        "Nombre": "Ejemplo",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio laboriosam magnam animi asperiores sit eum numquam sapiente ullam veniam ab laudantium eligendi, et laborum nisi impedit. Nisi sapiente, ipsa quia.",
        "Foto": "url de una imagen",
        "Fecha": "2018-24-06",
        "Lugar": "Lugar del evento",
        "Hora": "14:00"

     }
    ```


