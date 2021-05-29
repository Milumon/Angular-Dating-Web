import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  
  constructor(private http: HttpClient) { }

  productosSelect(){
    const ruta = "https://restcountries.eu/rest/v2/all";
    return this.http.get(ruta);
  }

  productoDatos(codigo3producto){
    const ruta = "https://restcountries.eu/rest/v2/alpha/" + codigo3producto;
    return this.http.get(ruta);
  }
}
