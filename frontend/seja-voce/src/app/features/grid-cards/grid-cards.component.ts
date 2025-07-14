import { Component } from '@angular/core';
import { PhraseService } from '../phrases/services/phrase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-cards',
  imports: [CommonModule],
  templateUrl: './grid-cards.component.html',
  styleUrl: './grid-cards.component.scss',
  standalone: true,

})
export class GridCardsComponent {

  phrases: any;
  constructor(private phraseService: PhraseService) {}
  phrases = this.phraseService.phrases;

}
