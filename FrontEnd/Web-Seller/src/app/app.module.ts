
// LOCAL MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MainDashboardComponent } from './Components/main-dashboard/main-dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { NotificationTrayComponent } from './Components/notification-tray/notification-tray.component';

// SERVICES MODULES
import { AuthService } from './Services/AuthService/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MainDashboardComponent,
    HeaderComponent,
    NotificationTrayComponent
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
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
