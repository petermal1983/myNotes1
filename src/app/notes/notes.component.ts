import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  
})
export class NotesComponent implements OnInit {

  noteNumbers: Array<any> = [1, 2, 3, 4]


  addNote() {
    this.noteNumbers.push(this.noteNumbers.length+1);
    
    console.log(this.noteNumbers);
} 


  constructor() { }

  ngOnInit(): void {
  }

}
