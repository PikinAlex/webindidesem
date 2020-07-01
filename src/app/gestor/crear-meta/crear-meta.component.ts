import { Proyectos } from './../../shared/models/proyectos';
import { Component, OnInit } from '@angular/core';
import { CrearMetaService } from '../../shared/services/crear-meta.service';
import { ProyectosService } from '../../shared/services/proyectos.service';
import { Metas } from '../../shared/models/metas';
import { InvitarService } from '../../shared/services/invitar.service';
import { analytics } from 'firebase';
@Component({
  selector: 'app-crear-meta',
  templateUrl: './crear-meta.component.html',
  styleUrls: ['./crear-meta.component.css']
})

export class CrearMetaComponent implements OnInit {
  title = 'Nueva Meta';
  nombre_meta: string;
  email: string;
  valor_inicial: string;
  proyectos: Proyectos[];
  idProy: string;
  metas: Metas[];
  idMeta: string;
  valMed: string;
  valLogro: string;
  valFrec: string;
  medicion: any;
  logros: any;
  frecuencias: any;
  idInvi: string;
  invitados: any;
  constructor(private CrearMeta: CrearMetaService,
              private proyectosService: ProyectosService,private InvitarService: InvitarService) { }

  ngOnInit() {
    /*this.CrearMeta.leer_metas(this.idProy).subscribe(data => {
      this.metas = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          nombre: e.payload.doc.data()['nombre_meta'],
          medicion: e.payload.doc.data()['medicion'],
          valor_inicial: e.payload.doc.data()['valor_inicial'],
          logro: e.payload.doc.data()['logro'],
          frecuencia: e.payload.doc.data()['frecuencia'],
          descripcion: e.payload.doc.data()['descripcion'],
        };
      });
    });*/
    this.mostrarProyecto();
    this.medicion = ['Unidad', 'Porcentaje'];
    this.logros = ['Aumentar', 'Disminuir'];
    this.frecuencias = ['Mes', 'Bimestre', 'Semestre', 'Año']
  }

  mostrarProyecto() {
    this.proyectosService.lee_proyecto().subscribe(data => {
      this.proyectos = data.map(e => {
        return {
          idP: e.payload.doc.id,
          nombreP: e.payload.doc.data()['nombre_proyecto'],
        } as Proyectos;
      });
    });
  }

  mostrarMetas() {
    this.CrearMeta.leer_metas(this.idProy,this.idProy).subscribe(data => {
      this.metas = data.map(e => {
        return {
          idM: e.payload.doc.id,
          nombreM: e.payload.doc.data()['nombre_meta'],
          emailM: e.payload.doc.data()['email'],
          valorInicialM: e.payload.doc.data()['valor_inicial'],
          medicionM: e.payload.doc.data()['medicion'],
          logroM: e.payload.doc.data()['logro'],
          frecuenciaM: e.payload.doc.data()['frecuencia']
        }as Metas;
      });
    });
  }

  mostrarinvitados() {
    this.InvitarService.lee_invitados(this.idProy).subscribe(data => {
      this.invitados = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          email: e.payload.doc.data()['email'],
        };
      });
    });
  }

  cambioProyecto(value: string) {
    this.idProy = value;
  }
  cambioinvitado(value: string) {
    this.idInvi = value;
  }

  cambioMeta(value2: string) {
    this.idMeta = value2;
  }

  cambioMedicion(value3: string) {
    this.valMed = value3;
  }

  cambioLogro(value4: string) {
    this.valLogro = value4;
  }

  cambioFrecuencia(value5: string) {
    this.valFrec = value5;
  }

  CreateRecord() {
    let record = {};
    let recordID = this.idProy;
    let recordID2 = this.idProy;
    record['nombre_meta'] = this.nombre_meta;
    record['email'] =  this.email;
    record['valor_inicial'] = this.valor_inicial;
    record['medicion'] = this.valMed;
    record['logro'] = this.valLogro;
    record['frecuencia'] = this.valFrec;
    this.CrearMeta.crear_meta(recordID,recordID2,record).then(resp => {
      this.nombre_meta = "";
      this.email="";
      this.valor_inicial = "";
      this.valMed = "";
      this.valLogro = "";
      this.valFrec = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
  RemoveRecord(rowID) {
    let recordID = this.idProy;
    let recordID2 = this.idProy;
    this.CrearMeta.eliminar_meta(recordID,recordID2,rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }


}
