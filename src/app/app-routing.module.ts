import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetalleMesaComponent } from './components/detalle-mesa/detalle-mesa.component';
import { ListaMesasComponent } from './components/lista-mesas/lista-mesas.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [

  {
    path:'',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {path: 'inicio',
  component: InicioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'mesas',
    component: ListaMesasComponent
  },
  {
    path: 'detalle-mesa/:id',
    component: DetalleMesaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
