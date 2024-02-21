import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CdkTableModule } from '@angular/cdk/table';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { TableCompComponent } from './table-comp/table-comp.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableCompComponent,
    LoginCompComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
