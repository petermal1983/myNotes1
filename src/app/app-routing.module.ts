import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Note1Component } from './note1/note1.component';
import { Note2Component } from './note2/note2.component';
import { Note3Component } from './note3/note3.component';
import { Note4Component } from './note4/note4.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [

  {
    path: '', component: NotesComponent, children: [

      { path: 'note-1', component: Note1Component },
      { path: 'note-2', component: Note2Component },
      { path: 'note-3', component: Note3Component },
      { path: 'note-4', component: Note4Component }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
