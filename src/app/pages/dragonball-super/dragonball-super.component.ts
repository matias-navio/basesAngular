import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";

// interface para crear personajes
interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super.component.html',
  styleUrls: ['./dragonball-super.component.css']
})
export class DragonballSuperComponent {
  // señales para el personaje
  name = signal('');
  power = signal(0);

  // señal que tiene como generico un arrelo de personajes
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegetta', power: 8000}
  ]);

  // metodo para agregar personajes a la lista
  addCharacter() {
    // validamos datos
    if(!this.name() || !this.power() || this.power() <= 0){
      return;
    }
    // creamos nuevo personaje
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }
    // actualizamos la señal de la lista usando la lista anterior con el nuevo personaje
    // this.characters.update((list) => [...list, newCharacter]);
    console.log({newCharacter});
    this.resetFields();
  }

  // metodo para resetear campos de texto
  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
