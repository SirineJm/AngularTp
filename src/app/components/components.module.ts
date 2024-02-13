import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantEvalComponent } from './etudiant-eval/etudiant-eval.component';



@NgModule({
  declarations: [
    EtudiantEvalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EtudiantEvalComponent
  ]
})
export class ComponentsModule { }
