import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { ServiciosComponent } from './inicio/servicios/servicios.component';
import { EmpresaComponent } from './inicio/empresa/empresa.component';
import { LogrosComponent } from './inicio/logros/logros.component';
import { PartnersComponent } from './inicio/partners/partners.component';
import { ProductosComponent } from './inicio/productos/productos.component';
import { LocationComponent } from './inicio/location/location.component';
import { VideoComponent } from './inicio/video/video.component';
import { MainHeadComponent } from './common/main-head/main-head.component';
import { InformationComponent } from './inicio/information/information.component';
import { PersonalComponent } from './inicio/personal/personal.component';
import { HomeComponent } from './inicio/home/home.component';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
