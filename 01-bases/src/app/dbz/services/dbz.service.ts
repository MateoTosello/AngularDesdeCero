import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters : Character[] = [{
    id : uuid(),
    name : 'Krillin',
    power : 1000
  },{
    id : uuid(),
    name : 'Goku',
    power : 9500
  }
  ];

  addCharacter(character : Character) : void {

    const newCharacter : Character = {
      id : uuid(),
      ...character //toma todas las propiedades del character y las "esparce" en el nuevo objeto que está creando
    };

    this.characters.push(newCharacter)
  }

  // onDeleteCharacter( index : number ) : void {
  //   this.characters.splice(index,1)
  // }
  onDeleteCharacterById( id : string ) : void {
    this.characters = this.characters.filter(
      character => character.id !== id
      );
  }

}
