import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantEvalListComponent } from './etudiant-eval-list/etudiant-eval-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EtudiantEvalDetailsComponent } from './etudiant-eval-details/etudiant-eval-details.component';

const routes: Routes = [{path:'etudevals/:id',component: EtudiantEvalDetailsComponent},
                        {path:'etudevals',component: EtudiantEvalListComponent},
                        {path:'',component: LandingPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
