import { Component, OnInit, Input } from '@angular/core';

const musicVolume = 0.2;

@Component({
  selector: 'app-opened-pack',
  templateUrl: './opened-pack.component.html',
  styleUrls: ['./opened-pack.component.scss']
})
export class OpenedPackComponent implements OnInit {
  @Input() bestRarity;
  @Input() cards = [];
  showCard1 = false;
  showCard2 = false;
  showCard3 = false;
  revealCard1 = false;
  revealCard2 = false;
  revealCard3 = false;
  beat = false;
  beatSpaceman = false;
  danceTusa = false;
  showConfetti = false;
  explode = false;
  fireworks = false;
  giantsAudio = new Audio();
  backgroundTusa = false;
  backgroundGiants = false;
  backgroundSpaceman = false;
  showMoreButton = false;
  gifs = [
    { src: '../../../assets/gif/ultra-rare-1.gif', show: false, class: 'ultra-rare-gif-1' },
    { src: '../../../assets/gif/ultra-rare-2.gif', show: false, class: 'ultra-rare-gif-2' },
    { src: '../../../assets/gif/ultra-rare-3.gif', show: false, class: 'ultra-rare-gif-3' },
    { src: '../../../assets/gif/ultra-rare-4.gif', show: false, class: 'ultra-rare-gif-4' },
    { src: '../../../assets/gif/ultra-rare-5.gif', show: false, class: 'ultra-rare-gif-5' },
  ];
  constructor() { }

  ngOnInit(): void {
    this.cards = this.cards.map((card, index) => {
      return {
        ...card,
        id: index + 1,
        showCard: false,
        revealCard: false
      }
    })
    this.playGiants();
    this.playFullAnimation();
  }

  private playFullAnimation() {
    setTimeout(() => {
      this.cards[0].showCard = true;
    }, 1000);
    setTimeout(() => {
      this.cards[0].revealCard = true;
    }, 6500);
    setTimeout(() => {
      this.cards[1].showCard = true;
    }, 7000);
    setTimeout(() => {
      this.cards[1].revealCard = true;
    }, 12500);
    setTimeout(() => {
      this.cards[2].showCard = true;
    }, 13000);
    setTimeout(() => {
      this.cards[2].revealCard = true;
      if (this.bestRarity === 'R') {
        this.fireworks = true;
      } else if (this.bestRarity === 'SR') {
        this.giantsAudio.pause();
        this.playSilbatos();
      } else if (this.bestRarity === 'UR') {
        this.giantsAudio.pause();
        this.explode = true;
        this.playExplosion();
      }
      this.playBackground();
    }, 24300);
    if (this.bestRarity === 'UR') {
      setTimeout(() => {
        this.playSpaceman();
        this.beatSpaceman = true;
      }, 30000)
      setTimeout(() => {
        this.gifs[0].show = true;
      }, 33500);
      setTimeout(() => {
        this.gifs[1].show = true;
      }, 35000);
      setTimeout(() => {
        this.gifs[2].show = true;
      }, 38000);
      setTimeout(() => {
        this.gifs[3].show = true;
      }, 41000);
      setTimeout(() => {
        this.gifs[4].show = true;
      }, 43000);
    }
    setTimeout(() => {
      if (this.bestRarity === 'R') {
        this.beat = true;
      } else if (this.bestRarity === 'SR') {
        this.playTusa();
        this.showConfetti = true;
        this.danceTusa = true;
      } else {
      }
    }, 26000)
    if (this.bestRarity === 'R' || this.bestRarity === 'SR') {
      setTimeout(() => {
        this.showConfetti = false;
        this.fireworks = false;
        this.explode = false;
        this.showMoreButton = true;
      }, 50000)
    } else {
      setTimeout(() => {
        this.gifs[0].show = false;
        this.gifs[1].show = false;
        this.gifs[2].show = false;
        this.gifs[3].show = false;
        this.gifs[4].show = false;
        this.showMoreButton = true;
      }, 60000)
    }
  }

  private playGiants() {
    this.giantsAudio.src = '../../../assets/mp3/giants.mp3';
    this.giantsAudio.load();
    this.giantsAudio.volume = musicVolume;
    this.giantsAudio.play();
  }

  private playBackground() {
    switch (this.bestRarity) {
      case 'R':
        this.backgroundGiants = true;
        break;
      case 'SR':
        this.backgroundTusa = true;
        break;
      case 'UR':
        this.backgroundSpaceman = true;
        break;
    }
  }

  private playSilbatos() {
    const silbato1 = new Audio();
    const silbato2 = new Audio();
    const silbato3 = new Audio();
    silbato1.src = '../../../assets/mp3/silbato.mp3';
    silbato2.src = '../../../assets/mp3/silbato.mp3';
    silbato3.src = '../../../assets/mp3/silbato.mp3';
    silbato1.load();
    silbato2.load();
    silbato3.load();
    silbato1.volume = 1;
    silbato2.volume = 1;
    silbato3.volume = 1;
    silbato1.play();
    setTimeout(() => {
      silbato2.play();
    }, 750);
    setTimeout(() => {
      silbato3.play();
    }, 1250);
  }

  private playTusa() {
    const audio = new Audio();
    audio.src = '../../../assets/mp3/tusa-8-bits.mp3';
    audio.load();
    audio.volume = musicVolume;
    audio.play();
  }

  private playExplosion() {
    const audio = new Audio();
    audio.src = '../../../assets/mp3/explosion.mp3';
    audio.load();
    audio.volume = musicVolume;
    audio.play();
  }

  private playSpaceman() {
    const audio = new Audio();
    audio.src = '../../../assets/mp3/spaceman.mp3';
    audio.load();
    audio.volume = musicVolume;
    audio.play();
  }

}
