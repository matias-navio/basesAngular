import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  // pipes para modificar visualmente un elemento sin cambiar su estado real
  imports: [UpperCasePipe],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  // señales, valores que pueden cambiar con el tiempo y reacciona visualmente
  name = signal('Ironman');
  age = signal(45);

  // metodo para mostrar los valores de las señales computado
  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  // metodo para mostrar el nombre en mayuscula computado
  capitalizedName = computed(() => this.name().toString().toUpperCase());

  // cambiar valor de una señal
  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge(){
    this.age.set(60);
  }

  capitaliceName(){
    return `${ this.name().toString().toUpperCase() }`;
  }
}

