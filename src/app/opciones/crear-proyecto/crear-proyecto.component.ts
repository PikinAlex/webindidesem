import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../shared/services/proyectos.service';
@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {
  title = 'Crear Proyectos';

  proyectos: any;
  nombre_proyecto: string;
  descripcion: string;

  constructor(private ProyectosService: ProyectosService) { }

  ngOnInit() {
    this.ProyectosService.lee_proyecto().subscribe(data => {

      this.proyectos = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          nombre_proyecto: e.payload.doc.data()['nombre_proyecto'],
          descripcion: e.payload.doc.data()['descripcion'],
        };
      })
      console.log(this.proyectos);

    });
  }

  CreateRecord() {
    let record = {};
    record['nombre_proyecto'] = this.nombre_proyecto;
    record['descripcion'] = this.descripcion;
    this.ProyectosService.crear_proyecto(record).then(resp => {
      this.nombre_proyecto = "";
      this.descripcion = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

 /* RemoveRecord(rowID) {
    this.crudService.delete_Student(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.crudService.update_Student(recordRow.id, record);
    recordRow.isEdit = false;
  }
  }*/
}
