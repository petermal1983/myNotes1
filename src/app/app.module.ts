import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { Note1Component } from './note1/note1.component';
import { Note2Component } from './note2/note2.component';
import { Note3Component } from './note3/note3.component';
import { Note4Component } from './note4/note4.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    Note1Component,
    Note2Component,
    Note3Component,
    Note4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
