import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {AccordionModule} from 'primeng/accordion';   
import {ButtonModule} from 'primeng/button'; 
import {MenuModule} from 'primeng/menu'; 

import { Routes, RouterModule } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { PieComponent } from './pie/pie.component';
import { IndexComponent } from './index/index.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {path:'', component: IndexComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    CabezaComponent,
    PieComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    ButtonModule,
    AccordionModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
