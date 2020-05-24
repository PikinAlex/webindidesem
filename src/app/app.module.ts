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

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";


import { environment } from '../environments/environment';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AuthService } from './auth/auth.service';
import { ChartsModule } from 'ng2-charts';
import { HistoricoPorcentajeMetaComponent } from './components/historico-porcentaje-meta/historico-porcentaje-meta.component';
import { ComparativoMensualMetaComponent } from './components/comparativo-mensual-meta/comparativo-mensual-meta.component';
import { PorcentajeGlobalMetasComponent } from './components/porcentaje-global-metas/porcentaje-global-metas.component';

const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'iniciar-sesion', component: IniciarSesionComponent},
  {path:'registro-usuario', component: RegistroUsuarioComponent},
  {path:'agregar-estrategia', component: AgregarEstrategiaComponent},
  {path:'pantalla-principal', component: PantallaPrincipalComponent},

];

var config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
};
@NgModule({
  declarations: [
    AppComponent,
    CabezaComponent,
    PieComponent,
    IndexComponent,
    RegistroUsuarioComponent,
    IniciarSesionComponent,
    PantallaPrincipalComponent,
    AgregarEstrategiaComponent,
    HistoricoPorcentajeMetaComponent,
    ComparativoMensualMetaComponent,
    PorcentajeGlobalMetasComponent,
  ],
  imports: [
    BrowserModule,
    MenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    ButtonModule,
    AccordionModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AppRoutingModule,
    AppRoutingModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    AngularFirestoreModule,
    ChartsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
