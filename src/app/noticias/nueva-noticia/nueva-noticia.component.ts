import { Component, OnInit } from '@angular/core';
import { NoticiasServiceService } from '../../models/noticias-service.service';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import {NgForm} from '@angular/forms';

import {FormControl, Validators} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-nueva-noticia',
  templateUrl: './nueva-noticia.component.html',
  styleUrls: ['./nueva-noticia.component.css']
})
export class NuevaNoticiaComponent implements OnInit {

  constructor(private router: Router, 
  	private titleService: Title,
  	private servicio:NoticiasServiceService,
  	private toastr: ToastrService) { }

    public noticia = {};
    public error:string;

  ngOnInit() {
  	 this.titleService.setTitle('Crear noticia');
  }

    onSubmit(f: NgForm){
        
      let datos = f.value;
      let info = this.servicio.nuevaNoticia(datos);

      console.log(info);
      //this.toastr.success('Noticia registrada correctamente', 'Operación exitosa');
    	

    }
  

}
