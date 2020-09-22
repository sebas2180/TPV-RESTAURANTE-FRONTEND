import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { MatSortModule }  from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ArticuloService } from './services/articuloService/articulo.service';
import { CanActivateService } from './services/canActivateService/can-activate.service';
import { UsuarioService } from './services/usuarioService/usuario.service';

import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { CardLoginComponent } from './components/login/card-login/card-login.component';
import { RegistrarComponent } from './components/login/registrar/registrar.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { PaginatorComponent } from './components/lista-articulos/paginator/paginator.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    InicioComponent,
    ArticuloComponent,
    CarrouselComponent,
    CardLoginComponent,
    RegistrarComponent,
    ListaArticulosComponent,
    PaginatorComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,MatSidenavModule,
    MatPaginatorModule,
    BrowserModule,
    CdkTableModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatSelectModule,
    LayoutModule,
    MatListModule
  ],
  providers: [ ArticuloService, UsuarioService, CanActivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
