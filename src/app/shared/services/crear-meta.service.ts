import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CrearMetaService {

  constructor(
    private firestore: AngularFirestore,
  ) {}

  crear_meta(recordID,recordID2, record) {
    // return this.firestore.doc('Proyectos').collection('invitados').add(record);
    // MeNzLhC7oCgSMCQ0qjEg
    return this.firestore.doc('Proyectos/' + recordID + '/invitados/'+ recordID2).collection('/metas_creadas/').add(record);
   }
   leer_metas(recordID,recordID2) {
     // return this.firestore.collection('Proyectos').snapshotChanges();
     // return this.firestore.doc('Proyectos/MeNzLhC7oCgSMCQ0qjEg').collection('/invitados/').snapshotChanges();
     return this.firestore.doc('Proyectos/' + recordID + '/invitados/' + recordID2).collection('/metas_creadas/').snapshotChanges();
   }
   getMetas(recordID,recordID2) {
     return this.firestore.collection('Proyectos/' + recordID + '/invitados/'+ recordID2 +'/metas_creadas/').snapshotChanges();
   }
   actualizar_meta(recordID,recordID2, record) {
    // this.firestore.doc('Proyectos/' + recordID).update(record);
    // this.firestore.doc('Proyectos/MeNzLhC7oCgSMCQ0qjEg/invitados/'+recordID).update(record);
    this.firestore.doc('Proyectos/'+ recordID +'/invitados/'+ recordID2 +'/metas_creadas/' + recordID).update(record);
  }
   eliminar_meta(recordID,recordID2,record_id) {
     // this.firestore.doc('Proyectos' + record_id).delete();
     // this.firestore.doc('Proyectos/MeNzLhC7oCgSMCQ0qjEg/invitados/'+record_id).delete();
     this.firestore.doc('Proyectos/'+ recordID +'/invitados/'+ recordID2 + '/metas_creadas/' + record_id).delete();
   }
}
