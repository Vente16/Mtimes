import { Injectable } from '@angular/core';


import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { RequestOptions} from '@angular/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class NoticiasServiceService {
  constructor(public http: HttpClient) {
      
  }

   
  public url = 'https://jvente18.000webhostapp.com';
  
  // Retorna todas la noticias
  public getNoticias(){
    return this.http.get(this.url+'/noticias');
  }

  // Retorna la información de una noticia

  public getNoticia(id:number){

    return this.http.get(this.url+'/noticia/'+id);
  }

  public elimnarNoticia(id:number){

    return this.http.get(this.url+'/eliminarNoticia/'+id);

  }

  public nuevaNoticia(noticia){
     
     let json = JSON.stringify(noticia);
     return json;
     //this.http.post(this.url+'/nuevaNoticia', noticia);
  }


}
