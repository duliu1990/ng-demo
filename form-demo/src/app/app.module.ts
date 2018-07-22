import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FormsComponent } from './forms/forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    FormsComponent,
    FormValidationComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
