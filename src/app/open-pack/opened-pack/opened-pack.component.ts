import { Component, OnInit } from '@angular/core';

const musicVolume = 1;

@Component({
  selector: 'app-opened-pack',
  templateUrl: './opened-pack.component.html',
  styleUrls: ['./opened-pack.component.scss']
})
export class OpenedPackComponent implements OnInit {
  cards = [
    {
      id: 1,
      showCard: false,
      revealCard: false
    },
    {
      id: 2,
      showCard: false,
      revealCard: false
    },
    {
      id: 3,
      showCard: false,
      revealCard: false
    },
  ];
  maxRarity = 'rare';
  showCard1 = false;
  showCard2 = false;
  showCard3 = false;
  revealCard1 = false;
  revealCard2 = false;
  revealCard3 = false;
  beat = false;
  danceTusa = false;
  showConfetti = false;
  explode = false;
  giantsAudio = new Audio();

  constructor() { }

  ngOnInit(): void {

    this.playGiants();

    this.playFullAnimation();
  }

  playFullAnimation() {
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
      if (this.maxRarity === 'rare') {
        this.giantsAudio.pause();
        this.playSilbatos();
        this.playTusa();
      } else if (this.maxRarity === 'super-rare') {

      } else {
        this.explode = true;
      }
    }, 24300);
    setTimeout(() => {
      if (this.maxRarity === 'rare') {
        this.showConfetti = true;
        this.danceTusa = true;
      } else if (this.maxRarity === 'super-rare') {
        this.beat = true;
      } else {

      }
    }, 26000)
  }

  playGiants() {
    this.giantsAudio.src = '../../../assets/mp3/giants.mp3';
    this.giantsAudio.load();
    this.giantsAudio.volume = musicVolume;
    this.giantsAudio.play();
  }

  playSilbatos() {
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

  playTusa() {
    const audio = new Audio();
    audio.src = '../../../assets/mp3/tusa-8-bits.mp3';
    audio.load();
    audio.volume = musicVolume;
    audio.play();
  }
 
}
