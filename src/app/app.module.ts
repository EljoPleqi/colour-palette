import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwatchComponent } from './swatch/swatch.component';
import { SetColorDirective } from './set-color.directive';
import { ColorBankComponent } from './color-bank/color-bank.component';
import { ButtonComponent } from './button/button.component';
import { ColorChangerDirective } from './directives/color-changer.directive';
import { CreationFormComponent } from './creation-form/creation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SwatchComponent,
    SetColorDirective,
    ColorBankComponent,
    ButtonComponent,
    ColorChangerDirective,
    CreationFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
