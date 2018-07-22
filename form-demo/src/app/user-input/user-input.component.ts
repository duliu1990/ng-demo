import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  values: string = '';

  box2Value: string = '';

  box3Value: string = '';

  heros = [];

  constructor() { }

  ngOnInit() {

  }



  onKey(event: any) {
    this.values += event.target.value + "|";
  }

  onEnter(value: string){
    this.box2Value = value;
  }

  update(value: string){
    this.box3Value = value ;
  }

  add(value: string){
    if(value) {
      this.heros.push(value);
    }
  }
}
