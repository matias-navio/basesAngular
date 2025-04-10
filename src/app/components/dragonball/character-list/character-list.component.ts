import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface'

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {

  listName = input.required<string>();

  // de esta forma importamos los personajes de un elemento padre
  // nos pasamos informacion entre componenetes
  characters = input.required<Character[]>();
}
