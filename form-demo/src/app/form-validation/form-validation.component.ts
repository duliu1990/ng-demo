import { Component, OnInit } from '@angular/core';
import {Hero} from '../forms/hero';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {forbiddenNameValidator} from '../shared/forbidden-validator.directive';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  hero = {name: 'Dr.Du', alterEgo: 'Dr. What', power: this.powers[0]};

  submitted = false;

  heroForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.heroForm = this.fb.group({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i)
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo),
      'power': new FormControl(this.hero.power, Validators.required)
    });
  }

  onSubmit() {
    this.submitted = true ;
  }

  get diagnostic() {
    return JSON.stringify(this.hero);
  }

  get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power'); }
}
