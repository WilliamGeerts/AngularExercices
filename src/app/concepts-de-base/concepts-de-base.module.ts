import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConceptsDeBaseComponent} from "./concepts-de-base.component";
import {CdbExercice1Component} from "./cdb-exercice1/cdb-exercice1.component";
import {CdbExercice2Component} from "./cdb-exercice2/cdb-exercice2.component";
import {CdbExercice3Component} from "./cdb-exercice3/cdb-exercice3.component";
import {CdbExercice4Component} from "./cdb-exercice4/cdb-exercice4.component";
import {CdbExercice5Component} from "./cdb-exercice5/cdb-exercice5.component";
import {CdbExercice6Component} from "./cdb-exercice6/cdb-exercice6.component";
import {CdbExercice42Component} from "./cdb-exercice42/cdb-exercice4.2.component";
import {FormsModule} from "@angular/forms";
import {ConceptsDeBaseRootingModule} from "./concepts-de-base-rooting.module";

@NgModule({
  declarations: [
    ConceptsDeBaseComponent,
    CdbExercice1Component,
    CdbExercice2Component,
    CdbExercice3Component,
    CdbExercice4Component,
    CdbExercice5Component,
    CdbExercice6Component,
    CdbExercice42Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ConceptsDeBaseRootingModule
  ]
})
export class ConceptsDeBaseModule { }
