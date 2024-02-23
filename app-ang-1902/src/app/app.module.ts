import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CdkTableModule } from '@angular/cdk/table';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { TableCompComponent } from './components/table-comp/table-comp.component';
import { LoginCompComponent } from './components/login-comp/login-comp.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TableCompComponent,
    LoginCompComponent,
    MainComponent
  ],
  imports: [
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    BrowserModule,
    HttpClientModule,
    CdkTableModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
