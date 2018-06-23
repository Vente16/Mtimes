import { Component, OnInit } from '@angular/core';
import { NoticiasServiceService } from '../models/noticias-service.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(
  	private servicio:NoticiasServiceService,
  	private router: Router, 
  	private titleService: Title,
  	private toastr: ToastrService) { }

    public info;
    public error:string;
    public id_noticia;
    public index;
 

  ngOnInit() {

  	this.titleService.setTitle('Noticias');
    this.obtenerNoticias();
     
 
  }
    obtenerNoticias(){

    // Servicio para llamar a las noticias
  	this.servicio.getNoticias().subscribe(
      data => {
      	 //console.log(data);
      	 this.info = data;
      }, // success path
      error => this.error = error // error path
    );  

   }

   getId(id, index){

   	 this.id_noticia = id;
   	 this.index = index;
   }

   eliminarNoticia(){

   
    this.info.splice(this.index, 1);
    //console.log(this.id_noticia);
    //console.log(this.id_noticia);
    //let datos = this.servicio.elimnarNoticia(this.id_noticia);
    this.toastr.success('Noticia eliminada correctamente', 'Operación exitosa');

   

    /*datos.subscribe(
      data => {
         console.log(data);
         let more = data;
         this.obtenerNoticias();
         this.toastr.success('Noticia eliminada correctamente', 'Operación exitosa');
      }, // success path
      error => this.error = error // error path
    );   */

    

   }

   




}
