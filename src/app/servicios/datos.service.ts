import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  getPersonas()
  {
    return this.http.get("http://localhost/datos/personas");
  }
  getServicios()
  {
    return this.http.get("http://localhost/datos/servicios");
  }
}
