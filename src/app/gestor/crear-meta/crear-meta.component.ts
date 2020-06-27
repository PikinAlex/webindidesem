import { Proyectos } from './../../shared/models/proyectos';
import { Component, OnInit } from '@angular/core';
import { CrearMetaService } from '../../shared/services/crear-meta.service';
import { ProyectosService } from '../../shared/services/proyectos.service';
@Component({
  selector: 'app-crear-meta',
  templateUrl: './crear-meta.component.html',
  styleUrls: ['./crear-meta.component.css']
})

export class CrearMetaComponent implements OnInit {
  title = 'Nueva Meta';
  metas: any;
  nombre: string;
  email: string;
  valor_inicial: string;
  medicion: string;
  logro: string;
  frecuencia: string;
  proyectos: Proyectos[];
  opcSelect: string;
  constructor(private CrearMeta: CrearMetaService, private proyectosService: ProyectosService) { }

  ngOnInit() {
    this.CrearMeta.leer_metas().subscribe(data => {
      this.metas = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          nombre: e.payload.doc.data()['nombre'],
          medicion: e.payload.doc.data()['medicion'],
          valor_inicial: e.payload.doc.data()['valor_inicial'],
          logro: e.payload.doc.data()['logro'],
          frecuencia: e.payload.doc.data()['frecuencia'],
          descripcion: e.payload.doc.data()['descripcion'],
        };
      });
    });

    this.proyectosService.lee_proyecto().subscribe(data => {
      this.proyectos = data.map(e => {
        return {
          id: e.payload.doc.id,
          nombre: e.payload.doc.data()['nombre_proyecto']
        } as Proyectos;
      });
    });
  }

  CreateRecord() {
    let record = {};
    let recordID = {};
    recordID = this.proyectos.push();
    record['nombre'] = this.nombre;
    this.CrearMeta.crear_meta(record, recordID).then(resp => {
      this.nombre = "";
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
