import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class InvitarService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  invitar(recordID,record) {
   // return this.firestore.doc('Proyectos').collection('invitados').add(record);
    return this.firestore.doc('Proyectos/' + recordID).collection('/invitados/').add(record);

  }
  lee_invitados(recordID) {
    //return this.firestore.collection('Proyectos').snapshotChanges();
    return this.firestore.doc('Proyectos/'+ recordID).collection('/invitados/').snapshotChanges()
  }
  eliminar_invitado(recordID,record_id) {
    //this.firestore.doc('Proyectos' + record_id).delete();
    this.firestore.doc('Proyectos/'+ recordID + '/invitados/'+record_id).delete();
  }
}
