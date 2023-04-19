import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    rutas=[
      {
          titulo:'Tienda',
          direccion:'/home'
      },
      {
        titulo:'Nosotros',
        direccion:'/acerca'
      },
      {
        titulo:'contáctenos',
        direccion:'/contacto'
      }
    ]
}
