import { DragonballService } from './../../services/dragonball.service';
import { Component, inject, signal } from '@angular/core';
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
})
export class DragonballSuperComponent {
  // inyeccion de dependencia del servicio
  public dragonballService = inject(DragonballService);

}
