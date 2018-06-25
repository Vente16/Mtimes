import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

   constructor(
   	public http: HttpClient) { }

   public url = 'https://jvente18.000webhostapp.com';

   public getGraficas(){

    return this.http.get(this.url+'/eventos');

  }

}
