import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotesDashboardComponent } from './notes-dashborad/notes-dashboard.component';
import { NotesComponent } from './notes/notes.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NoteComponent } from './note/note.component';
import {MatDialogModule} from '@angular/material/dialog';
import { GetNotesService } from '../services/get-notes.service'
import { AuthGuard } from '../auth.guard';
import { AddNoteComponent } from './add-note/add-note.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { EditNoteComponent } from './edit-notes/edit-note/edit-note.component';
import { MatIconModule } from '@angular/material/icon';


const routes:Routes =[
      {path:'', component:NotesDashboardComponent,
    canActivate: [AuthGuard]
  }
    ]

@NgModule({
  declarations: [
    NotesDashboardComponent,
    NotesComponent,
    NoteComponent,
    AddNoteComponent,
    EditNoteComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forChild(routes),

  ],
  providers: [GetNotesService,AuthGuard],
  exports:[]
})
export class NotesModule { }
