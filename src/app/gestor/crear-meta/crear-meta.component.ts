import { Proyectos } from './../../shared/models/proyectos';
import { Component, OnInit } from '@angular/core';
import { CrearMetaService } from '../../shared/services/crear-meta.service';
import { ProyectosService } from '../../shared/services/proyectos.service';
import { Metas } from '../../shared/models/metas';
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
  medicion: string;
  logro: string;
  frecuencia: string;
  proyectos: Proyectos[];
  idProy: string;
  metas: Metas[];
  idMeta: string;
  constructor(private CrearMeta: CrearMetaService,
              private proyectosService: ProyectosService) { }

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
  }

  mostrarProyecto() {
    this.proyectosService.lee_proyecto().subscribe(data => {
      this.proyectos = data.map(e => {
        return {
          idP: e.payload.doc.id,
          nombreP: e.payload.doc.data()['nombre_proyecto'],
        } as Proyectos;
      });
      console.log(this.proyectos);
    });
  }

  mostrarMetas() {
    this.CrearMeta.leer_metas(this.idProy).subscribe(data => {
      this.metas = data.map(e => {
        return {
          idM: e.payload.doc.id,
          nombreM: e.payload.doc.data()['nombre_meta']
        }as Metas;
      });
      console.log(this.metas);
    });
  }

  cambioProyecto(value: string) {
    this.idProy = value;
  }

  cambioMeta(value2: string) {
    this.idMeta = value2;
  }

  CreateRecord() {
    let record = {};
    let recordID = this.idProy;
    record['nombre_meta'] = this.nombre_meta;
    this.CrearMeta.crear_meta(recordID, record).then(resp => {
      this.nombre_meta = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
  RemoveRecord(rowID) {
    this.CrearMeta.eliminar_meta(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }


}
