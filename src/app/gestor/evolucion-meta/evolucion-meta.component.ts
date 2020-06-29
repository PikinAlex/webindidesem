import { Component, OnInit } from '@angular/core';
import { EvolucionMetaService } from '../../shared/services/evolucion-meta.service';

@Component({
  selector: 'app-evolucion-meta',
  templateUrl: './evolucion-meta.component.html',
  styleUrls: ['./evolucion-meta.component.css']
})
export class EvolucionMetaComponent implements OnInit {
  title = 'Evolucion Meta';
  evolucion: any;
  nombre: string;
  constructor(private Evolucionmeta: EvolucionMetaService) { }

  ngOnInit() {
    this.Evolucionmeta.leer_evolucion().subscribe(data => {
      this.evolucion = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          nombre: e.payload.doc.data()['nombre'],
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
