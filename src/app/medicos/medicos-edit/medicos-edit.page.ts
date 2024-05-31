import { Component, OnInit } from '@angular/core';
import { Firestore, addDoc, collection, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medicos-edit',
  templateUrl: './medicos-edit.page.html',
  styleUrls: ['./medicos-edit.page.scss'],
})
export class MedicosEditPage implements OnInit {

  registroForm = new FormGroup({
   id: new FormControl(''),
   nombre: new FormControl(''),
   apellido: new FormControl(''),
   especialidad: new FormControl(''),
   salario: new FormControl(''),
});

  medicosId: string | null = null;
  medicos: any = {};

  constructor(
    private readonly firestore: Firestore,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      console.log(params);
      this.medicosId = params.id;
      });
      if (this.medicosId) {
         this.obtenerMedicos(this.medicosId);
      } else {
      }
    }
      
    incluirMedicos = () => {
       console.log('Aqui incluir en firebase');
       let medicosRef = collection(this.firestore, 'medicos');
       const formValue = {
        ...this.registroForm.value,
        }; 
      addDoc(medicosRef, formValue).then((doc) => {
        console.log('Registro hecho');
        this.router.navigate(['/medicos-list']);
      }).catch((error) => {
        console.error('Error al crear el Medico:', error);
      });
    };

    editarMedicos = (id: string) => {
      console.log('Aqui editar en firebase');
      let document = doc(this.firestore, 'medicos', id);
      const formValue = {
        ...this.registroForm.value,
        };  
        updateDoc(document, formValue).then((doc) => {
          console.log('Registro editado');
          this.router.navigate(['/medicos-list']);
        }).catch((error) => {
          console.error('Error al editar el Medico:', error);
        });
      };

      obtenerMedicos = (id: string) => {
       console.log('Listar medicos');
       let documentRef = doc(this.firestore, 'medicos', id);
       getDoc(documentRef).then((doc) => {
       if (doc.exists()) {
        console.log('Detalle del medico:', doc.data());
         this.medicos = doc.data();
         this.registroForm.setValue({
          id: this.medicosId || '',
          nombre: this.medicos['nombre'] || '',
          apellido: this.medicos['apellido'] || '',
          especialidad: this.medicos['especialidad'] || '',
          salario: this.medicos['salario'] || '',
        });
      } else {
         console.log('No se encontró el medico con el ID proporcionado.');
      }
    }).catch((error) => {
       console.error('Error al consultar el medico:', error);
    });
  };

  incluirOEditarMedicos() {
    if (this.medicosId) {
    this.editarMedicos(this.medicosId);
    } else {
    this.incluirMedicos();
    }
  }
      
}


