import { Injectable } from '@angular/core';

const musicPlayer = new Audio();

@Injectable({
  providedIn: 'root'
})

export class AudioService {
  constructor() { }

  playSound( soundPath ) {
    try {
      musicPlayer.src = soundPath;
      musicPlayer.load();
      musicPlayer.play();
    } catch (error) {
      console.log('explote para la mismisima mierda misma => ', error);
    }
  }

  stopSound() {
    musicPlayer.pause();
  }
}
