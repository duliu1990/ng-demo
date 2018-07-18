import { Component, OnInit } from '@angular/core';
import {Hero} from "../Hero";
import {HEROS} from "../mock-heros";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {

  heros: Hero[] ;
  id: number ;

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero ;
  }

  constructor(private  heroService: HeroService) { }

  ngOnInit() {

    this.id = 20 ;

    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heros = heroes);
  }

  add(name: string): void {
    name = name.trim();

    if (!name) { return; }

    this.id++ ;

    this.heroService.addHero({id: this.id, name: name } as Hero)
      .subscribe(hero => {
        this.heros.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heros = this.heros.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
