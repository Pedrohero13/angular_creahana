import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from '../notes-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit{
  note:any;

  constructor(private noteService: NotesServiceService,  private route: ActivatedRoute){

  }
  ngOnInit(): void {
    const idNote: Number = this.route.snapshot.params['id'];
    if (idNote) {
       this.note = this.noteService.listaNotas.find(itemNote => itemNote.id == idNote)!;
    }
  }

}
