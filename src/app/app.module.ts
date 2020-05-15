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
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { AgregarEstrategiaComponent } from './agregar-estrategia/agregar-estrategia.component';

const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'iniciar-sesion', component: IniciarSesionComponent},
  {path:'registro-usuario', component: RegistroUsuarioComponent},
  {path:'agregar-estrategia', component: AgregarEstrategiaComponent},
  {path:'pantalla-principal', component: PantallaPrincipalComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    CabezaComponent,
    PieComponent,
    IndexComponent,
    RegistroUsuarioComponent,
    IniciarSesionComponent,
    PantallaPrincipalComponent,
    AgregarEstrategiaComponent
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
