import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../providers/hero.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService) { }
   
  ngOnInit(): void {
    this.getHeroes();
  }
}