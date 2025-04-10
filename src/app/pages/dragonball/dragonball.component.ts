import { Component, signal } from '@angular/core';

// interface para crear personajes
interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css'
})
export class DragonballComponent {

  // señales para el personaje
  name = signal('Gohan');
  power = signal(100);

  // señal que tiene como generico un arrelo de personajes
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegetta', power: 8000},
    {id: 3, name: 'Piccolo', power: 3500},
    {id: 4, name: 'Yamcha', power: 500},
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
    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  // metodo para resetear campos de texto
  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
