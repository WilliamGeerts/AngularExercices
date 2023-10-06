import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ConceptsDeBaseComponent} from "./concepts-de-base/concepts-de-base.component";
import {FormulairesComponent} from "./formulaires/formulaires.component";
import {ServicesComponent} from "./services/services.component";
import {PipesComponent} from "./pipes/pipes.component";
import {CommunicationComponent} from "./communication/communication.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {VariableFromAdressComponent} from "./navigation/variable-from-adress/variable-from-adress.component";

const routes: Routes = [
  {path:"concepts-de-base", component: ConceptsDeBaseComponent, loadChildren: () => import('./concepts-de-base/concepts-de-base.module').then(m => m.ConceptsDeBaseModule)},
  {path:"les-formulaires", component: FormulairesComponent},
  {path:"les-services", component: ServicesComponent},
  {path:"les-pipes", component: PipesComponent},
  {path:"la-communication", component: CommunicationComponent},
  {path:"la-navigation", component: NavigationComponent, children: [{path: ":id", component: VariableFromAdressComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
