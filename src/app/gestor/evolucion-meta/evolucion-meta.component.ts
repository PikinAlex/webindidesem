import { Component, OnInit } from '@angular/core';
import { EvolucionMetaService } from '../../shared/services/evolucion-meta.service';

@Component({
  selector: 'app-evolucion-meta',
  templateUrl: './evolucion-meta.component.html',
  styleUrls: ['./evolucion-meta.component.css']
})
export class EvolucionMetaComponent implements OnInit {
  title = 'Nueva Meta';
  metas: any;
  nombre: string;
  email: string;
  valor_inicial: string;
  medicion: string;
  logro: string;
  frecuencia: string;
  constructor(private Evolucionmeta: EvolucionMetaService) { }

  ngOnInit() {
    this.Evolucionmeta.leer_evolucion().subscribe(data => {
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
  }

  CreateRecord() {
    let record = {};
    record['nombre'] = this.nombre;
    this.Evolucionmeta.añadir_evolucion(record).then(resp => {
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
