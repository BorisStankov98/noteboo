import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { GetNotesService } from 'src/app/services/get-notes.service';
import { AddNoteComponent } from '../add-note/add-note.component';
@Component({
  selector: 'app-notes',
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.scss']
})
export class NotesDashboardComponent implements OnInit {

  notes:any
  constructor(
    public dialog: MatDialog,
    public getNotes:GetNotesService,
    private auth: AuthService
    ) {
    }
    ngOnInit(){
    this.getNotes.getData().then((data: {id: string}[]) => {
      this.notes=data;
      console.log(data)
    })
  }
  addNote(): void {
    const dialogRef = this.dialog.open(AddNoteComponent, {
      width: "80%",
    });
  }
}

