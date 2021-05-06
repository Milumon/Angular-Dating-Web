import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  noticiasSelect(){
    const ruta = "https://www.munisantanita.gob.pe/MicroservicioNoticias/noticia";
    return this.http.get(ruta);
  }

}

 