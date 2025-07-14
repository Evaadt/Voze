import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {

  constructor() { }

  private _phrases = [
    { id: 1, content: 'A vida trará coisas boas se tiveres paciência.', author: 'Proverbio 10:24' },
    { id: 2, content: 'A vida trará coisas boas se tiveres paciência.', author: 'Proverbio 10:24' },
    { id: 3, content: 'A vida trará coisas boas se tiveres paciência.', author: 'Proverbio 10:24' },
    { id: 4, content: 'A vida trará coisas boas se tiveres paciência.', author: 'Proverbio 10:24' },
    { id: 5, content: 'A vida trará coisas boas se tiveres paciência.', author: 'Proverbio 10:24' },
  ];


   phrases() {
    return this._phrases;
  }
  
}
