import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { 
    
  } 

  noticiasSelect(){ 

    let headers = new HttpHeaders() 
    headers = headers.set('Access-Control-Allow-Origin', '*');  
    const ruta = "https://mycorsproxy-milumon.herokuapp.com/https://www.munisantanita.gob.pe/MicroservicioNoticias/noticia";
    return this.http.get(ruta, { headers });
  }

}

 