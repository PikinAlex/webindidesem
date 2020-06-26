import { Component, OnInit } from '@angular/core';
import { CrearMetaService } from '../../shared/services/crear-meta.service';
import {SelectItem} from 'primeng/api';
@Component({
  selector: 'app-crear-meta',
  templateUrl: './crear-meta.component.html',
  styleUrls: ['./crear-meta.component.css']
})

interface City {
  name: string;
  code: string;
}

export class CrearMetaComponent implements OnInit {
  title = 'Crear Metas';
  metas: any;
  nombre: string;

  cities: City[];
    selectedCity: City;

  constructor(private CrearMeta: CrearMetaService) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
   }

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
      })
      console.log(this.nombre);
    });
  }

  CreateRecord() {
    let record = {};
    record['nombre'] = this.nombre;
    this.CrearMeta.crear_meta(record).then(resp => {
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
