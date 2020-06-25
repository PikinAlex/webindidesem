import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {


  constructor(
    private firestore: AngularFirestore
  ) { }

  crear_proyecto(record) {
    return this.firestore.collection('Proyectos').add(record);
  }

  lee_proyecto() {
    return this.firestore.collection('Proyectos').snapshotChanges();
  }

  actualizar_proyecto(recordID, record) {
    this.firestore.doc('Proyectos/' + recordID).update(record);
  }

  eliminar_proyecto(record_id) {
    this.firestore.doc('Proyectos/' + record_id).delete();
  }
}
