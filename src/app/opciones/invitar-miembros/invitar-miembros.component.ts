import { Component, OnInit } from '@angular/core';
import { InvitarService } from '../../shared/services/invitar.service';
import { ProyectosService } from '../../shared/services/proyectos.service';
import { Proyectos } from './../../shared/models/proyectos';
@Component({
  selector: 'app-invitar-miembros',
  templateUrl: './invitar-miembros.component.html',
  styleUrls: ['./invitar-miembros.component.css']
})
export class InvitarMiembrosComponent implements OnInit {
  title = 'Invitar Al Proyecto';

  invitados: any;
  email: string;

  proyectos: Proyectos[];
  idProy: string;
  constructor(private InvitarService: InvitarService, private proyectosService: ProyectosService) { }

  ngOnInit() {
    /*this.InvitarService.lee_invitados().subscribe(data => {

      this.invitados = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          email: e.payload.doc.data()['email'],
        };
      })
      console.log(this.invitados);
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
  CreateRecord() {
    let record = {};
    let recordID= this.idProy;
    record['email'] = this.email;
    console.log(recordID);
    this.InvitarService.invitar(recordID,record).then(resp => {
      this.email = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
  RemoveRecord(rowID) {
    let recordID= this.idProy;
    this.InvitarService.eliminar_invitado(recordID,rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }

}
