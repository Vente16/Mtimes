import { Component, OnInit } from '@angular/core';

import { DashboardServiceService } from '../models/dashboard-service.service';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router, 
  	private titleService: Title,
    private servicio:DashboardServiceService) { }

    public noticias;
    public publicaciones;
    public eventos;

  ngOnInit() {

  	this.titleService.setTitle('Mtimes');
    let am = this.servicio.getGraficas();
    console.log(am);
    
  }

    // Doughnut
  public doughnutChartLabels:string[] = ['Noticias', 'Eventos', 'Publicaciones'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
   // Barras

   public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Junio'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65], label: 'Noticias'},
    {data: [28], label: 'Eventos'},
    {data: [40], label: 'Publicaciones'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  // PolarArea
  public polarAreaChartLabels:string[] = ['Noticias', 'Eventos', 'Publicaciones'];
  public polarAreaChartData:number[] = [300, 500, 100];
  public polarAreaLegend:boolean = true;
 
  public polarAreaChartType:string = 'polarArea';


}
