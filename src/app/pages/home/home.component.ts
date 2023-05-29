import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public personas: any[]=[]
  constructor(private servicio: DatosService){}
  ngOnInit(){
      this.servicio.getPersonas()
      .subscribe((data:any)=>{
          this.personas=data;      
      })
  }
}


