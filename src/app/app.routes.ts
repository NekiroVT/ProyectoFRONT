import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { RegistroSolicitudComponent } from './estudiante-proceso/registro-solicitud/registro-solicitud.component';
import { ListaProcesosComponent } from './estudiante-proceso/lista-procesos/lista-procesos.component';
import { RegistroPracticasComponent } from './estudiante-proceso/registro-practicas/registro-practicas.component';
import { SolicitudesPracticasComponent } from './coordinador-proceso/solicitudes-practicas/solicitudes-practicas.component';
import { DetalleSolicitudComponent } from './coordinador-proceso/solicitudes-practicas/detalle-solicitud/detalle-solicitud.component';
import { ListaSolicitudesAprobadasComponent } from './coordinador-proceso/lista-solicitudes-aprobadas/lista-solicitudes-aprobadas.component';
import { DetalleAprobacionComponent } from './coordinador-proceso/lista-solicitudes-aprobadas/detalle-aprobacion/detalle-aprobacion.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { 
        path: 'registro-solicitud', 
        component: RegistroSolicitudComponent, 
        canActivate: [AuthGuard], 
        data: { roles: ['estudiante'] } 
      },
      { 
        path: 'lista-procesos', 
        component: ListaProcesosComponent, 
        canActivate: [AuthGuard], 
        data: { roles: ['estudiante'] } 
      },
      { 
        path: 'registro-practicas', 
        component: RegistroPracticasComponent, 
        canActivate: [AuthGuard], 
        data: { roles: ['estudiante'] } 
      },
      { 
        path: 'lista-solicitudes', 
        component: SolicitudesPracticasComponent, 
        canActivate: [AuthGuard], 
        data: { roles: ['coordinador'] } 
      },
      { 
        path: 'lista-solicitudes/id', 
        component: DetalleSolicitudComponent, 
        canActivate: [AuthGuard], 
        data: { roles: ['coordinador'] } 
      },

      { 
        path: 'lista-solicitudes-aprobadas', 
        component: ListaSolicitudesAprobadasComponent, 
        canActivate: [AuthGuard], 
        data: { roles: ['coordinador'] } 
      },
      { 
        path: 'lista-solicitudes-aprobadas/id', 
        component: DetalleAprobacionComponent, 
        canActivate: [AuthGuard], 
        data: { roles: ['coordinador'] } 
      }
    ]
  },
  { path: '**', redirectTo: 'login' }
];