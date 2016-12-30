import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './providers/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent {
  title = 'Tour of Heroes';
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