import { Component, OnInit } from '@angular/core';
import {Hero} from "../Hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-dsahboard',
  templateUrl: './dsahboard.component.html',
  styleUrls: ['./dsahboard.component.css']
})
export class DsahboardComponent implements OnInit {

  heros: Hero[] ;

  constructor(private  heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }


  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heros = heroes.slice(1, 5));
  }

}
