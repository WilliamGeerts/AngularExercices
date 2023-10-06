import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormulairesComponent } from './formulaires/formulaires.component';
import { FExercice1Component } from './formulaires/f-exercice1/f-exercice1.component';
import { FExercice2Component } from './formulaires/f-exercice2/f-exercice2.component';
import { FExercice3Component } from './formulaires/f-exercice3/f-exercice3.component';
import { ServicesComponent } from './services/services.component';
import { SExercice1Component } from './services/s-exercice1/s-exercice1.component';
import { SExercice2Component } from './services/s-exercice2/s-exercice2.component';
import { LoginComponent } from './services/s-exercice2/login/login.component';
import { HeaderComponent } from './services/s-exercice2/header/header.component';
import { CommunicationComponent } from './communication/communication.component';
import { CExercice1Component } from './communication/c-exercice1/c-exercice1.component';
import { CExercice2Component } from './communication/c-exercice2/c-exercice2.component';
import { CExercice3Component } from './communication/c-exercice3/c-exercice3.component';
import { CExercice1ChildComponent } from './communication/c-exercice1/c-exercice1-child/c-exercice1-child.component';
import { CExercice2ChildComponent } from './communication/c-exercice2/c-exercice2-child/c-exercice2-child.component';
import { CExercice3ChildComponent } from './communication/c-exercice3/c-exercice3-child/c-exercice3-child.component';
import { PipesComponent } from './pipes/pipes.component';
import { PExercice1Component } from './pipes/p-exercice1/p-exercice1.component';
import { PExercice2Component } from './pipes/p-exercice2/p-exercice2.component';
import { KeepNumberPipe } from './pipes/p-exercice1/keep-number.pipe';
import { KeepNumberOrStringPipe } from './pipes/p-exercice2/keep-number-or-string.pipe';
import {AppRoutingModule} from "./app-routing.module";
import { NavigationComponent } from './navigation/navigation.component';
import { VariableFromAdressComponent } from './navigation/variable-from-adress/variable-from-adress.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulairesComponent,
    FExercice1Component,
    FExercice2Component,
    FExercice3Component,
    ServicesComponent,
    SExercice1Component,
    SExercice2Component,
    LoginComponent,
    HeaderComponent,
    CommunicationComponent,
    CExercice1Component,
    CExercice2Component,
    CExercice3Component,
    CExercice1ChildComponent,
    CExercice2ChildComponent,
    CExercice3ChildComponent,
    PipesComponent,
    PExercice1Component,
    PExercice2Component,
    KeepNumberPipe,
    KeepNumberOrStringPipe,
    NavigationComponent,
    VariableFromAdressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
