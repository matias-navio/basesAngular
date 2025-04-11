import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

// metodo para cargar del localStorage nuestra lista de personajes
const loadFromLocalStorage = ():Character[] => {

  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonballService {
  constructor() { }

  // señal que tiene como generico un arrelo de personajes
  characters = signal<Character[]>(loadFromLocalStorage());

  // guarda en el localStorage cada vez que se recarga nuestra lista de personajes
  // y la guarda como un JSON
  saveToLocalStorage = effect(() => {

    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  // metodo para agregar personajes a la lista
  addCharacter(character: Character) {
    // actualizamos la señal de la lista usando la lista anterior con el nuevo personaje
    this.characters.update((list) => [...list, character]);
  }
}
