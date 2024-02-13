import { Component, Input, OnInit } from '@angular/core';
import { EtudiantEval } from '../models/etudiant-eval.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-etudiant-eval',
  templateUrl: './etudiant-eval.component.html',
  styleUrls: ['./etudiant-eval.component.scss'],
})
export class EtudiantEvalComponent implements OnInit {
  @Input() etudiant!: EtudiantEval;
  prenomEnseignant!: string;
  id!: string;
  constructor(private router:Router) {}
  ngOnInit() {
    this.prenomEnseignant!="Nom Enseignant";
    this.id!="01";
  }
 
  onClickDetails() {
    this.router.navigateByUrl(`etudevals/$ {this.etudiant.id}`);
  }
  onSubmitForm(form: NgForm) {
    console.log(form.value);
  }
}
