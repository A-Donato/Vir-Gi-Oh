import { Component } from '@angular/core';

@Component({
  selector: 'app-pobre-pack',
  templateUrl: './pobre-pack.component.html',
  styleUrls: ['./pobre-pack.component.scss']
})
export class PobrePackComponent {
  showExitButton = false;
  pobreLabel = 'Pobre';

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
    const virgoInsults = ['Virgo', 'Virgo', 'Putocagón', 'Putito', 'Chupachichi', 'Bobo'];
    setInterval(() => {
      this.pobreLabel = virgoInsults[Math.round(Math.random()*(virgoInsults.length-1))];
      setTimeout(() => {
        this.pobreLabel = 'Pobre';
      }, 750)
    }, 4000)
  }
}
