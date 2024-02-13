import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-new-eval',
  templateUrl: './new-eval.component.html',
  styleUrls: ['./new-eval.component.scss'],
})
export class NewEvalComponent {
  evalForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.evalForm=this.formBuilder.group({
      prenom: [null],
      nom: [null],
      identification: [null],
      email: [null]
    });
  }
  onSubmitForm() {
    console.log(this.evalForm.value);
  }
}
