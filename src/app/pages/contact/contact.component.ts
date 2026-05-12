import { Component, OnInit, AfterViewInit } from '@angular/core'; // Añadimos AfterViewInit
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

// Declaramos AOS para que TypeScript no se queje
declare var AOS: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit { // Implementamos AfterViewInit
  loading = false;
  successMessage = '';

  contactForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    asunto: new FormControl('Pagos y facturación'),
    mensaje: new FormControl('', Validators.required)
  });

  // Este método se ejecuta cuando la vista ya está lista
  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh(); // Refresca las posiciones
        AOS.init({
          duration: 1000,
          once: true,
          mirror: false
        });
      }
    }, 100);
  }

  onSubmit() {
    if (this.contactForm.invalid) return;
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.successMessage = 'Mensaje enviado correctamente ✅';

      Swal.fire({
        title: '¡Sistemas Sincronizados!',
        text: 'Tu mensaje ha cruzado el ciberespacio con éxito. 🚀',
        icon: 'success',
        confirmButtonColor: '#00e5ff',
        background: '#071126',
        color: '#fff'
      });
      this.contactForm.reset({ asunto: 'Pagos y facturación' });
    }, 1500);
  }
}
