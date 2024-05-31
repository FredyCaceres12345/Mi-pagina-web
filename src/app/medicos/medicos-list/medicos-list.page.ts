import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-medicos-list',
  templateUrl: './medicos-list.page.html',
  styleUrls: ['./medicos-list.page.scss'],
})
export class MedicosListPage implements OnInit {

  constructor(
    private readonly firestore: Firestore,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  medicosArray: any[] = [];

  ngOnInit() {
    this.listarMedicos();
  }

  listarMedicos = () => {
    console.log('Listar medicos');
    const medicosRef = collection(this.firestore, 'medicos');
    collectionData(medicosRef, { idField: 'id' }).subscribe((respuesta) => {
    this.medicosArray = respuesta.map((medicos) => ({
    ...medicos,   
    }));
    console.log('estos son los medicos', respuesta);
    });
  };

  eliminarMedicos = (id: string) => {
     console.log('Eliminando medicos con ID:', id);
     const documentRef = doc(this.firestore, 'medicos', id);
     deleteDoc(documentRef).then(() => {
     console.log('Medico eliminado correctamente');
     this.router.navigate(['/medicos-list']);
      }).catch((error) => {
         console.error('Error al eliminar el medico:', error);
        });
    };
}

    

