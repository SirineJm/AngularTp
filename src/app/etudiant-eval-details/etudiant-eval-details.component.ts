import { Component, OnInit } from '@angular/core';
import { EtudiantEval } from '../models/etudiant-eval.model';
import { EtudiantEvalsService } from '../services/etudiant-evals.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-etudiant-eval-details',
  templateUrl: './etudiant-eval-details.component.html',
  styleUrls: ['./etudiant-eval-details.component.scss']
})
export class EtudiantEvalDetailsComponent implements OnInit {
  etudiant!: EtudiantEval;
   
  constructor(private etudiantEvalsService:EtudiantEvalsService, private route: ActivatedRoute) {}
  ngOnInit() {
   const etudId= +this.route.snapshot.params['id'];
   this.etudiant=this.etudiantEvalsService.findEtudiantEvalById(etudId);
  }

  onClick1() {
    this.etudiantEvalsService.modifBonusEtudiantEval(this.etudiant.id,1);
  }
  onClick2() {
    this.etudiantEvalsService.modifBonusEtudiantEval(this.etudiant.id,0);
  }
}

