import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasServiceService } from '../../models/noticias-service.service';



import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ver-noticia',
  templateUrl: './ver-noticia.component.html',
  styleUrls: ['./ver-noticia.component.css']
})
export class VerNoticiaComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
  	private router: Router, 
  	private titleService: Title,
    private servicio:NoticiasServiceService) { }


  public info;
  public error:string;


  ngOnInit() {
    
    this.titleService.setTitle('Ver noticia');
  	let id = +this._route.snapshot.paramMap.get('id');
  	//console.log(id);

    let datos = this.servicio.getNoticia(id);

    datos.subscribe(
      data => {
         console.log(data);
         this.info = data;
      }, // success path
      error => this.error = error // error path
    );  

  }

}
