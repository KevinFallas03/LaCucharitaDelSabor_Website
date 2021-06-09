
// LOCAL MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { IvyCarouselModule } from 'angular-responsive-carousel';

// COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MainDashboardComponent } from './Components/main-dashboard/main-dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { NotificationTrayComponent } from './Components/notification-tray/notification-tray.component';

// SERVICES MODULES
import { AuthService } from './Services/AuthService/auth.service';
import { MenuComponent } from './Components/menu/menu.component';
import { PendientesComponent } from './Components/pendientes/pendientes.component';
import { CompletadosComponent } from './Components/completados/completados.component';
import { EnviosComponent } from './Components/envios/envios.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MainDashboardComponent,
    HeaderComponent,
    NotificationTrayComponent,
    MenuComponent,
    PendientesComponent,
    CompletadosComponent,
    EnviosComponent,
    UsuariosComponent
  ],
  entryComponents: [
    NotificationTrayComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    IvyCarouselModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
