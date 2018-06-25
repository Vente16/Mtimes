import { Injectable } from '@angular/core';


import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { RequestOptions} from '@angular/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


 const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'applicaction/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class NoticiasServiceService {
  constructor(public http: HttpClient) {
      
  }


  public handleError;
   
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

  public nuevaNoticia(noticia: any):  Observable<any>{

     let json = JSON.stringify(noticia);
     let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
         
    return this.http.post(this.url+'/nuevaNoticia', json, {headers: headers});
    
  }




}
