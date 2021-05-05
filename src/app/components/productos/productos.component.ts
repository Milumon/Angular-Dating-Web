import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/entities/Producto';
import { PRODUCTOS } from 'src/app/entities/Productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  frase = "Lo más destacado"; 
  productos = PRODUCTOS;
  productoElegido: Producto;
  
  aleatorio = Math.floor(Math.random()*this.productos.length); 

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(productoSeleccionado: Producto){
    console.log(productoSeleccionado);
    this.productoElegido = productoSeleccionado;
  }

}
