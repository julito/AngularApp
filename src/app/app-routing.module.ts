import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const rutas:Routes=[
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"acerca",
    component:AcercaComponent
  },
  {
    path:"contacto",
    component:ContactoComponent
  },
  {
    path:"#",
    component:ContactoComponent
  }
]     

@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: 
  [
    RouterModule
  ]
})
export class AppRoutingModule { }
