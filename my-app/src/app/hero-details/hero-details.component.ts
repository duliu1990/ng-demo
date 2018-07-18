import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../Hero";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input()
  selectedHero: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id');

    this.heroService.getHero(id).subscribe(hero => this.selectedHero = hero);

  }

  goBack(): void{
    this.location.back();
  }

  save(): void{
    this.heroService.updateHero(this.selectedHero)
      .subscribe(() => this.goBack());
  }
}
