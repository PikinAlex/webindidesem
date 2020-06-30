import { Component, OnInit } from '@angular/core';
import { EvolucionMetaService } from '../../shared/services/evolucion-meta.service';
import { Proyectos } from './../../shared/models/proyectos';
import { ProyectosService } from '../../shared/services/proyectos.service';
import { CrearMetaService } from '../../shared/services/crear-meta.service';
import { Metas } from '../../shared/models/metas';
@Component({
  selector: 'app-evolucion-meta',
  templateUrl: './evolucion-meta.component.html',
  styleUrls: ['./evolucion-meta.component.css']
})
export class EvolucionMetaComponent implements OnInit {
  title = 'Evolucion Meta';
  evolucion: any;
  nombre: string;
  proyectos: Proyectos[];
  idProy: string;
  metas: Metas[];
  idMeta: string;
  r:string;
  constructor(
    private Evolucionmeta: EvolucionMetaService,
    private proyectosService: ProyectosService,
    private CrearMeta: CrearMetaService) { }

  ngOnInit() {
    this.Evolucionmeta.leer_evolucion().subscribe(data => {
      this.evolucion = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          nombre: e.payload.doc.data()['nombre_evolucion'],
        };
      });
    });

    this.proyectosService.lee_proyecto().subscribe(data => {
      this.proyectos = data.map(e => {
        return {
          idP: e.payload.doc.id,
          nombreP: e.payload.doc.data()['nombre_proyecto'],
        } as Proyectos;
      });
      console.log(this.proyectos);
    });

<<<<<<< HEAD
  mostrarMetas() {
    this.CrearMeta.getMetas(this.idProy).subscribe(data => {
=======
    this.CrearMeta.leer_metas(this.idProy).subscribe(data => {
>>>>>>> a740d3e2d3eb1aaacefdf10c6cbb098d83232f40
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
    record['nombre'] = this.nombre;
    this.Evolucionmeta.añadir_evolucion(recordID, record).then(resp => {
      this.nombre = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
  RemoveRecord(rowID) {
    this.Evolucionmeta.eliminar_evolucion(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }

}
