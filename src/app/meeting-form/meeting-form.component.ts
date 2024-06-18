import { Meeting } from './../meeting';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meeting-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './meeting-form.component.html',
  styleUrl: './meeting-form.component.css'
})
export class MeetingFormComponent {

  submitted: boolean = false;
  model: Meeting;

  constructor(){
    this.model = new Meeting('', 0, new Date);
  {}
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.model);
  }

}
