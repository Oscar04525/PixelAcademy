import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css' // Asegúrate de que esta ruta sea correcta si tienes CSS
})
export class ContactComponent {
  // Aquí puedes añadir lógica de formulario en el futuro
  enviarMensaje() {
    alert('Mensaje enviado. ¡Nos pondremos en contacto contigo!');
  }
}
