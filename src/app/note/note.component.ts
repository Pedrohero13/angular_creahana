import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from '../notes-service.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  constructor(private noteService: NotesServiceService) {

  }

  listaNotas:any;
  ngOnInit(): void {
    this.listaNotas = this.noteService.listaNotas;
  }



}
