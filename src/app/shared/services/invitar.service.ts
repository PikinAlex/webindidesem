import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class InvitarService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  invitar(record) {
   // return this.firestore.doc('Proyectos').collection('invitados').add(record);
    return this.firestore.doc('Proyectos/MeNzLhC7oCgSMCQ0qjEg').collection('/invitados/').add(record);
  }
  lee_invitados() {
    //return this.firestore.collection('Proyectos').snapshotChanges();
    return this.firestore.doc('Proyectos/MeNzLhC7oCgSMCQ0qjEg').collection('/invitados/').snapshotChanges()
  }
  eliminar_invitado(record_id) {
    //this.firestore.doc('Proyectos' + record_id).delete();
    this.firestore.doc('Proyectos/MeNzLhC7oCgSMCQ0qjEg/invitados/'+record_id).delete();
  }
}
