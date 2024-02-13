import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantEvalComponent } from './etudiant-eval/etudiant-eval.component';
import { FormsModule } from '@angular/forms';
import { NewEvalComponent } from './new-eval/new-eval.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EtudiantEvalListComponent } from './etudiant-eval-list/etudiant-eval-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EtudiantEvalDetailsComponent } from './etudiant-eval-details/etudiant-eval-details.component';
@NgModule({
  declarations: [
    AppComponent,
    EtudiantEvalComponent,
    NewEvalComponent,
    EtudiantEvalListComponent,
    HeaderComponent,
    LandingPageComponent,
    EtudiantEvalDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
