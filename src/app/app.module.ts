import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

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

import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {  StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { articulosReducer, State } from './stores/reducers/articulo.reducer';
import { contReducer } from 'src/app/stores/reducers/contador.reducer';
import { articulosEffects } from './stores/effects/articulo.effects';
import { salonEffects } from './stores/effects/salon.effects';
import { effects } from './stores/effects';
import { GETArticulosSuccess, GET_ARTICULOS } from './stores/actions/articulo.actions';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { ListaCategoriasComponent } from './components/lista-categorias/lista-categorias.component';
import { CateogiraComponent } from './components/lista-categorias/cateogira/cateogira.component';
import { categoriasReducer } from './stores/reducers/categoria.reducer';
import { categoriaEffects } from './stores/effects/categoria.effects';
import { ListaMesasComponent } from './components/lista-mesas/lista-mesas.component';
import { MesaComponent } from './components/lista-mesas/mesa/mesa.component';
import { DetalleMesaComponent } from './components/detalle-mesa/detalle-mesa.component';
import { ListaArticuloComponent } from './components/lista-articulo/lista-articulo.component';
import { PanelCatalogoComponent } from './components/panel-catalogo/panel-catalogo.component';
import { BarraBusquedaComponent } from './components/detalle-mesa/barra-busqueda/barra-busqueda.component';
import { AgregarArticuloComponent } from './components/articulo/agregar-articulo/agregar-articulo.component';
import { FacturaComponent } from './components/detalle-mesa/factura/factura.component';
import { ItemComponent } from './components/detalle-mesa/factura/lista-items/item/item.component';
import { ListaItemsComponent } from './components/detalle-mesa/factura/lista-items/lista-items.component';
import { itemReducer } from './stores/reducers/item.reducer';
import { AgregarMesaComponent } from './components/lista-mesas/agregar-mesa/agregar-mesa.component';
import { salonReducer } from './stores/reducers/salonReducer.reducer';
import { GET_SALONES } from './stores/actions/salon.actions';
 
 
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
    PaginatorComponent,
    PiePaginaComponent,
    ListaCategoriasComponent,
    CateogiraComponent,
    ListaMesasComponent,
    MesaComponent,
    DetalleMesaComponent,
    ListaArticuloComponent,
    PanelCatalogoComponent,
    BarraBusquedaComponent,
    AgregarArticuloComponent,
    FacturaComponent,
    ItemComponent,
    ListaItemsComponent,
    AgregarMesaComponent
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
    MatListModule,
    StoreModule.forRoot({categoria: categoriasReducer,count: contReducer,articulo : articulosReducer, item : itemReducer,salon: salonReducer} as any, { runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot( [articulosEffects,categoriaEffects,salonEffects] )
  ],
  providers: [ ArticuloService, UsuarioService, CanActivateService,
    {
      provide: APP_INITIALIZER,
      useFactory: (store: Store<State>) => {
        return () => {
          store.dispatch(new GET_SALONES());
        };
      },
      multi: true,
      deps: [Store]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
