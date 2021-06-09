import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletadosComponent } from './Components/completados/completados.component';
import { EnviosComponent } from './Components/envios/envios.component';

//Components
import { LoginComponent } from './Components/login/login.component';
import { MainDashboardComponent } from './Components/main-dashboard/main-dashboard.component';
import { MenuComponent } from './Components/menu/menu.component';
import { PendientesComponent } from './Components/pendientes/pendientes.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'dashboard',
    component: MainDashboardComponent,
    //canActivate: [AuthUserGuard],
  },
  {
    path: 'pendientes',
    component: PendientesComponent,
    //canActivate: [AuthUserGuard],
  },
  {
    path: 'completados',
    component: CompletadosComponent,
    //canActivate: [AuthUserGuard],
  },
  {
    path: 'menu',
    component: MenuComponent,
    //canActivate: [AuthUserGuard],
  },
  {
    path: 'envios',
    component: EnviosComponent,
    //canActivate: [AuthUserGuard],
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
    //canActivate: [AuthUserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
