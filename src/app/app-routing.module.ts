import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './inicio/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'colaboradores', component: ColaboradoresComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
