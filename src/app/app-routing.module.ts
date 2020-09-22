import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
