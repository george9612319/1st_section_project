import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../client';


@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {

  submitted: boolean = false;
  model: Client;

  constructor(){
    this.model = new Client (-1, '', '', '', '');
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.model);
  }

}
