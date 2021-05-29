import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { ServiciosComponent } from './inicio/servicios/servicios.component';
import { EmpresaComponent } from './inicio/empresa/empresa.component';
import { LogrosComponent } from './inicio/logros/logros.component';
import { PartnersComponent } from './inicio/partners/partners.component';
import { LocationComponent } from './inicio/location/location.component';
import { VideoComponent } from './inicio/video/video.component';
import { MainHeadComponent } from './common/main-head/main-head.component';
import { InformationComponent } from './inicio/information/information.component';
import { PersonalComponent } from './inicio/personal/personal.component';
import { HomeComponent } from './inicio/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { HttpClientModule } from '@angular/common/http';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainHeaderComponent,
    MainFooterComponent,
    ServiciosComponent,
    EmpresaComponent,
    LogrosComponent,
    PartnersComponent,
    ProductosComponent,
    LocationComponent,
    VideoComponent,
    MainHeadComponent,
    InformationComponent,
    PersonalComponent,
    HomeComponent,
    NoticiasComponent,
    ColaboradoresComponent,
    TiendaComponent,
    ProductoDetalleComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule,
    FormsModule, 
    ReactiveFormsModule,
    OrderModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
