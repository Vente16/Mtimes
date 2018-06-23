import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  NoticiasComponent } from './noticias/noticias.component';
import {  VerNoticiaComponent } from './noticias/ver-noticia/ver-noticia.component';
import {  NuevaNoticiaComponent } from './noticias/nueva-noticia/nueva-noticia.component';
import {  DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [  

   {
    path: "noticias",
    component: NoticiasComponent
  },
   
  {
  	path: "",
    component: DashboardComponent

  },
   
  {
    path: "ver-noticia/:id",
    component: VerNoticiaComponent
  },

  {
    path: "nuevaNoticia",
    component: NuevaNoticiaComponent
  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
