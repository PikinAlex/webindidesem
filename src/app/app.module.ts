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
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";


import { environment } from '../environments/environment';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AuthService } from './auth/auth.service';
import { ChartsModule } from 'ng2-charts';
import { HistoricoPorcentajeMetaComponent } from './components/historico-porcentaje-meta/historico-porcentaje-meta.component';
import { ComparativoMensualMetaComponent } from './components/comparativo-mensual-meta/comparativo-mensual-meta.component';
import { PorcentajeGlobalMetasComponent } from './components/porcentaje-global-metas/porcentaje-global-metas.component';
import { MetasPendientesComponent } from './gestor/metas-pendientes/metas-pendientes.component';
import { MetasCumplidasComponent } from './gestor/metas-cumplidas/metas-cumplidas.component';
import { CrearMetaComponent } from './gestor/crear-meta/crear-meta.component';
import { AprobarMetaComponent } from './gestor/aprobar-meta/aprobar-meta.component';
import { CalendarioComponent } from './gestor/calendario/calendario.component';
import { SemanaActualComponent } from './reporte_metas/semana-actual/semana-actual.component';
import { MesActualComponent } from './reporte_metas/mes-actual/mes-actual.component';
import { AnoActualComponent } from './reporte_metas/ano-actual/ano-actual.component';
import { HistorialCompletoComponent } from './reporte_metas/historial-completo/historial-completo.component';
import { AdministrarCuentaComponent } from './opciones/administrar-cuenta/administrar-cuenta.component';
import { MiPerfilComponent } from './opciones/mi-perfil/mi-perfil.component';
import { EquipoComponent } from './opciones/equipo/equipo.component';
import { InvitarMiembrosComponent } from './opciones/invitar-miembros/invitar-miembros.component';
import { CrearProyectoComponent } from './opciones/crear-proyecto/crear-proyecto.component';
import { ContactComponent } from './contact/contact.component';

import { TodoListComponent } from './todo-list/todo-list.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { AngularFireDatabaseModule } from '@angular/fire/database';
const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'iniciar-sesion', component: LoginComponent},
  {path: 'registro-usuario',component: RegisterComponent },
  {path: 'contraseña-olvidada',component: ForgotPasswordComponent },
  {path:'verificar-email', component: VerifyEmailComponent},
  { path: 'todos', component: TodoListComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path:'pantalla-principal', component: PantallaPrincipalComponent,children: [

    {
      path: 'metas-pendientes',
      component: MetasPendientesComponent
    },
    {
      path: 'metas-cumplidas',
      component: MetasCumplidasComponent
    },
    {
      path: 'crear-meta',
      component: CrearMetaComponent
    },
    {
      path: 'aprobar-meta',
      component: AprobarMetaComponent
    },
    {
      path: 'calendario',
      component: CalendarioComponent
    },
    {
      path: 'semana-actual',
      component:SemanaActualComponent
    },
    {
      path: 'mes-actual',
      component: MesActualComponent
    },
    {
      path: 'ano-actual',
      component: AnoActualComponent
    },
    {
      path: 'historial-completo',
      component: HistorialCompletoComponent
    },
    {
      path: 'administrar-cuenta',
      component: AdministrarCuentaComponent
    },
    {
      path: 'mi-perfil',
      component: MiPerfilComponent
    },
    {
      path: 'equipo',
      component: EquipoComponent
    },
    {
      path: 'invitar-miembros',
      component: InvitarMiembrosComponent
    },
    {
      path: 'crear-proyecto',
      component: CrearProyectoComponent
    },
  ],
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CabezaComponent,
    PieComponent,
    IndexComponent,
    PantallaPrincipalComponent,
    HistoricoPorcentajeMetaComponent,
    ComparativoMensualMetaComponent,
    PorcentajeGlobalMetasComponent,
    MetasPendientesComponent,
    MetasCumplidasComponent,
    CrearMetaComponent,
    AprobarMetaComponent,
    CalendarioComponent,
    SemanaActualComponent,
    MesActualComponent,
    AnoActualComponent,
    HistorialCompletoComponent,
    AdministrarCuentaComponent,
    MiPerfilComponent,
    EquipoComponent,
    InvitarMiembrosComponent,
    CrearProyectoComponent,
    ContactComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    LoginComponent,
    VerifyEmailComponent,


  ],
  imports: [
    BrowserModule,
    MenuModule,
    AppRoutingModule,
    ButtonModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AngularFireAuthModule,
    RouterModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routes),
    AngularFireDatabaseModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
