import { Component, OnInit } from '@angular/core';
import { InvitarService } from '../../shared/services/invitar.service';
@Component({
  selector: 'app-invitar-miembros',
  templateUrl: './invitar-miembros.component.html',
  styleUrls: ['./invitar-miembros.component.css']
})
export class InvitarMiembrosComponent implements OnInit {
  title = 'Invitar al proyecto';

  invitados: any;
  email: string;
  constructor(private InvitarService: InvitarService) { }

  ngOnInit() {
    this.InvitarService.lee_invitados().subscribe(data => {

      this.invitados = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          email: e.payload.doc.data()['email'],
        };
      })
      console.log(this.invitados);
    });
  }

  CreateRecord() {
    let record = {};
    record['email'] = this.email;
    this.InvitarService.invitar(record).then(resp => {
      this.email = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
  RemoveRecord(rowID) {
    this.InvitarService.eliminar_invitado(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }

}
