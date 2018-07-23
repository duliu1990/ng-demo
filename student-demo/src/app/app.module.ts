import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {Route, RouterModule, Routes} from '@angular/router';
import { DsahboardComponent } from './dsahboard/dsahboard.component';
import { AddStudentComponent } from './add-student/add-student.component';

registerLocaleData(zh);

const appRoutes: Routes = [
  {path: '', component: DsahboardComponent},
  {path: 'add', component: AddStudentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DsahboardComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
