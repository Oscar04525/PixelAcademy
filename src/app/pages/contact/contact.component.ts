import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  loading = false;
  successMessage = '';
  // ESTO ES LO QUE NECESITA EL BOTÓN PARA NO DAR ERROR
  contactForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    asunto: new FormControl('Pagos y facturación'),
    mensaje: new FormControl('', Validators.required)
  });

  onSubmit() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;

      Swal.fire({
        title: '¡Sistemas Sincronizados!',
        text: 'Tu mensaje ha cruzado el ciberespacio con éxito. 🚀',
        icon: 'success',
        confirmButtonColor: '#00e5ff',
        background: '#071126',
        color: '#fff'
      });
      this.contactForm.reset();
    }, 1500);
  }
}
