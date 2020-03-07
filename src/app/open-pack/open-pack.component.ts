import { Component, OnInit } from '@angular/core';
import { CardService } from '../shared/services/card.service';
import { VIRGO_USERS } from '../constants/virgo-users';
import { AuthService } from '../shared/services/auth.service';

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

  constructor(private cardService: CardService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  openPack() {
    if (!this.openingPack) {
      this.cardService.buyPack(this.authService.getPlayer()).subscribe(response => {
        this.openingPack = true;
        this.enoughVirgoPoints = true;
        const { cards, bestRarity } = response;
        this.cards = cards;
        this.bestRarity = bestRarity;
        this.playAnimation();
      }, () => {
        this.enoughVirgoPoints = false;
        this.playAnimation();
      })
    }
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
