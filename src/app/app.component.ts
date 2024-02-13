import { Component, OnInit } from '@angular/core';
import { EtudiantEval } from './models/etudiant-eval.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  etudiants!: EtudiantEval[];
  title = 'EvaluationApp';
  student1!: EtudiantEval;
  student2!: EtudiantEval;

  ngOnInit() {
    this.etudiants = [
      new EtudiantEval(0,'Ahmed', 'GT TST', 'Brillant!', 6, new Date(2021, 9, 2)),
      new EtudiantEval(1,'Sirine', 'GT TST', 'Moyenne!', 2, new Date(2021, 9, 5)),
    ];
  }
}
