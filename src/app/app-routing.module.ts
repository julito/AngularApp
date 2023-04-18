import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const rutas:Routes=[
  {
    path:"inicio",
    component:HomeComponent
  },
  {
    path:"acerca",
    component:AcercaComponent
  },
  {
    path:"contacto",
    component:ContactoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
