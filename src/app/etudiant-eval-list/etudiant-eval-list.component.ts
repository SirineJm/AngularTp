import { Component } from '@angular/core';
import { EtudiantEval } from '../models/etudiant-eval.model';
import { EtudiantEvalsService } from '../services/etudiant-evals.service';

@Component({
  selector: 'app-etudiant-eval-list',
  templateUrl: './etudiant-eval-list.component.html',
  styleUrls: ['./etudiant-eval-list.component.scss'],
})
export class EtudiantEvalListComponent {
  etudiants!: EtudiantEval[];
   title = 'EvaluationApp';
  /*student1!: EtudiantEval;
  student2!: EtudiantEval;*/
  constructor(private etudiantEvalsService: EtudiantEvalsService) {}

  ngOnInit() {
    // this.etudiants = [
    //   new EtudiantEval(0,'Ahmed', 'GT TST', 'Brillant!', 6, new Date(2021, 9, 2)),
    //   new EtudiantEval(1,'Sirine', 'GT TST', 'Moyenne!', 2, new Date(2021, 9, 5)), ];
    this.etudiants = this.etudiantEvalsService.etudiants;
  }
}
