import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/entities/Producto';
import { PRODUCTOS } from 'src/app/entities/Productos';
import { ProductosService} from 'src/app/services/productos.service';


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

  ////////////// EVA 2 

  listaProductos: Producto[];
  productosFilter: any = { name: '' };
  order: String = 'alpha3Code';
  reverse: boolean = false;
  paginaActual: number = 1;

  ////////////////////
   

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.productosSelect().subscribe(
      (res: Producto[]) => {
        this.listaProductos = res;
        console.log(res);
      }
    )
  }

  setOrder(value: string){
    if(this.order === value){    
      this.reverse = !this.reverse;
    }
    this.order = value
  }

  seleccionar(productoSeleccionado: Producto){
    console.log(productoSeleccionado);
    this.productoElegido = productoSeleccionado;
  }



}
