import { Component, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
      {id: 1, name: 'Goku', power: 9001},
      {id: 2, name: 'Vegetta', power: 8000}
    ]);

  addCharacter() {
    // validamos datos
    if(!this.name() || !this.power() || this.power() <= 0){
      return;
    }
    // creamos nuevo personaje
    const newCharacter: Character = {
      id: 1000,
      name: this.name(),
      power: this.power()
    }
    // actualizamos la señal de la lista usando la lista anterior con el nuevo personaje
    // this.characters.update((list) => [...list, newCharacter]);
    console.log({newCharacter});
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
