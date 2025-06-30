import { Component, computed } from '@angular/core';
import { PhraseService } from '../services/phrase.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  imports: [CommonModule],
})

export class PhraseListComponent {
  // Computed Signal: gera uma lista reativa de frases
  phrases = computed(() => this.service.phrases());

  constructor(private service:PhraseService ) {}

  // Incrementa o número de curtidas da frase
  like(id: number) {
    // const phrase = this.service.getPhraseById(id);
    // if (phrase) {
    //   this.service.updatePhrase(id, { likes: phrase.likes + 1 });
    // }
  }

  // Remove a frase da lista
  delete(id: number) {
    // this.service.deletePhrase(id);
  }
}
