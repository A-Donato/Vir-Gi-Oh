import { Component, OnInit } from '@angular/core';
import { CardService } from '../shared/services/card.service';
import { VIRGO_USERS } from '../constants/virgo-users';

@Component({
  selector: 'app-open-pack',
  templateUrl: './open-pack.component.html',
  styleUrls: ['./open-pack.component.scss']
})
export class OpenPackComponent implements OnInit {

  packOpened = false;
  openingPack = false;
  enoughVirgoPoints = true;
  cards = [];
  bestRarity: string;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  openPack() {
    this.cardService.buyPack(VIRGO_USERS.CHESTER_TESTER).subscribe(response => {
      this.enoughVirgoPoints = true;
      const { cards, bestRarity } = response;
      this.cards = cards;
      this.bestRarity = bestRarity;
    }, () => {
      this.enoughVirgoPoints = false;
    }, () => {
      this.playAnimation();
    })
  }

  playAnimation() {
    this.openingPack = true;
    var audio = new Audio();
    audio.src = '../../assets/mp3/rising-drums.mp3';
    audio.load();
    audio.volume = 0.5;
    audio.play();
    audio.onended = () => {
      this.packOpened = true;
    };
  }
}
