import { Component } from '@angular/core';

@Component({
  selector: 'app-pobre-pack',
  templateUrl: './pobre-pack.component.html',
  styleUrls: ['./pobre-pack.component.scss']
})
export class PobrePackComponent {
  showExitButton = false;

  constructor() {
    var audio = new Audio();
    audio.src = '../../assets/mp3/baila-conmigo.mp3';
    audio.load();
    audio.volume = 0.6;
    audio.play();
    audio.onended = () => { 
      audio.play();
      audio.loop = true;
      this.showExitButton = true;
    }
  }
}
