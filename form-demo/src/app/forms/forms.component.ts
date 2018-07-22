import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true ;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
