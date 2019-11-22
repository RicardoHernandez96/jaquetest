import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { HttpClientModule } from '@angular/common/http';
import { RolPipe } from './pipes/rol.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RolPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
