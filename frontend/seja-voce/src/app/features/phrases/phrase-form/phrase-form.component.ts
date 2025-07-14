import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-phrase-form',
  templateUrl: './phrase-form.component.html',
  imports: [CommonModule],
})


export class PhraseFormComponent {
  // Campos do formulário
  content = '';
  author = '';
  imageUrl = '';

  constructor( private router: Router) {}

  // Submete uma nova frase
  submit() {
    // this.service.addPhrase({
    //   id: Date.now(), // Simula ID único
    //   content: this.content,
    //   author: this.author,
    //   imageUrl: this.imageUrl,
    //   likes: 0,
    //   comments: [] // Inicialmente sem comentários
    // });

    // Redireciona para a página inicial após salvar
    this.router.navigate(['/']);
  }
}
