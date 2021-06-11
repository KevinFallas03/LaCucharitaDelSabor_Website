
// LOCAL MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IvyCarouselModule } from 'angular-responsive-carousel';


// COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MainDashboardComponent } from './Components/main-dashboard/main-dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { NotificationTrayComponent } from './Components/notification-tray/notification-tray.component';
import { MenuComponent } from './Components/menu/menu.component';
import { EditProductComponent } from './Components/menu/edit-product/edit-product.component'
import { PendientesComponent } from './Components/pendientes/pendientes.component';
import { CompletadosComponent } from './Components/completados/completados.component';
import { EnviosComponent } from './Components/envios/envios.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';

// SERVICES MODULES
import { AuthService } from './Services/AuthService/auth.service';
import { CreateProductComponent } from './Components/menu/create-product/create-product.component';


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
    UsuariosComponent,
    EditProductComponent,
    CreateProductComponent,
  ],
  entryComponents: [
    NotificationTrayComponent, 
    EditProductComponent, 
    CreateProductComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    IvyCarouselModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
