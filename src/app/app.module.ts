import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { VerNoticiaComponent } from './noticias/ver-noticia/ver-noticia.component';
import { NuevaNoticiaComponent } from './noticias/nueva-noticia/nueva-noticia.component';
import { NoticiasServiceService } from './models/noticias-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule }   from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NoticiasComponent,
    VerNoticiaComponent,
    NuevaNoticiaComponent,
    DashboardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  
  ],
  providers: [NoticiasServiceService],
  bootstrap: [AppComponent, MenuComponent]
})
export class AppModule { }
