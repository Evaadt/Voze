import { Routes } from '@angular/router';
import { PhraseFormComponent } from './features/phrases/phrase-form/phrase-form.component';
import { PhraseListComponent } from './features/phrases/phrase-list/phrase-list.component';

export const routes: Routes = [
    { path: '', component: PhraseListComponent },
    { path: 'nova', component: PhraseFormComponent },
    { path: 'editar/:id', component: PhraseFormComponent }
  ];
  