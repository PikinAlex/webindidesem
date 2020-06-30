import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class EvolucionMetaService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  añadir_evolucion(recordID, record) {
    // return this.firestore.doc('Proyectos').collection('invitados').add(record);
    // MeNzLhC7oCgSMCQ0qjEg
     return this.firestore.doc('Proyectos/' + recordID +'/invitados/KMcN50oZoyDaFIahHHBT/metas_creadas/faltaid').collection('/evolucion/').add(record);
   }
   leer_evolucion() {
     // return this.firestore.collection('Proyectos').snapshotChanges();
     // return this.firestore.doc('Proyectos/MeNzLhC7oCgSMCQ0qjEg').collection('/invitados/').snapshotChanges();
     return this.firestore.doc('Proyectos/MeNzLhC7oCgSMCQ0qjEg/invitados/KMcN50oZoyDaFIahHHBT/metas_creadas/faltaid').collection('/evolucion/').snapshotChanges();
   }
   actualizar_evolucion(recordID, record) {
    // this.firestore.doc('Proyectos/' + recordID).update(record);
    // this.firestore.doc('Proyectos/MeNzLhC7oCgSMCQ0qjEg/invitados/'+recordID).update(record);
    this.firestore.doc('Proyectos/MeNzLhC7oCgSMCQ0qjEg/invitados/KMcN50oZoyDaFIahHHBT/metas_creadas/faltaid/evolucion/' + recordID).update(record);
  }
   eliminar_evolucion(record_id) {
     // this.firestore.doc('Proyectos' + record_id).delete();
     // this.firestore.doc('Proyectos/MeNzLhC7oCgSMCQ0qjEg/invitados/'+record_id).delete();
     this.firestore.doc('Proyectos/MeNzLhC7oCgSMCQ0qjEg/invitados/KMcN50oZoyDaFIahHHBT/metas_creadas/faltaid/evolucion/' + record_id).delete();
   }

}
