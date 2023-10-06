import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CdbExercice1Component} from "./cdb-exercice1/cdb-exercice1.component";
import {CdbExercice2Component} from "./cdb-exercice2/cdb-exercice2.component";
import {CdbExercice3Component} from "./cdb-exercice3/cdb-exercice3.component";
import {CdbExercice42Component} from "./cdb-exercice42/cdb-exercice4.2.component";
import {CdbExercice6Component} from "./cdb-exercice6/cdb-exercice6.component";
import {CdbExercice5Component} from "./cdb-exercice5/cdb-exercice5.component";
import {CdbExercice4Component} from "./cdb-exercice4/cdb-exercice4.component";

const routes: Routes = [
  {path: "exercice-1", component: CdbExercice1Component},
  {path: "exercice-2", component: CdbExercice2Component},
  {path: "exercice-3", component: CdbExercice3Component},
  {path: "exercice-4", component: CdbExercice4Component},
  {path: "exercice-5", component: CdbExercice5Component},
  {path: "exercice-6", component: CdbExercice6Component},
  {path: "exercice-42", component: CdbExercice42Component}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConceptsDeBaseRootingModule { }
