import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/entities/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto: Producto;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        const id = params.id
        console.log(id)
        if(id){
          this.leerProducto(id)
        }
      }
    )
  }

  leerProducto(id){
    this.productosService.productoDatos(id).subscribe(
      (res: Producto) => {
        this.producto = res
        console.log(this.producto)
      }
    )
  }

}
