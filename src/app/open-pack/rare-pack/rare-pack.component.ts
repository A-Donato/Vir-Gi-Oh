import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rare-pack',
  templateUrl: './rare-pack.component.html',
  styleUrls: ['./rare-pack.component.scss']
})
export class RarePackComponent implements OnInit {
  showCard1 = false;
  showCard2 = false;
  showCard3 = false;
  revealCard1 = false;
  revealCard2 = false;
  revealCard3 = false;
  beat = false;

  constructor() { }

  ngOnInit(): void {

    var audio = new Audio();
    audio.src = '../../../assets/mp3/giants.mp3';
    audio.load();
    audio.volume = 0.2;
    audio.play();

    setTimeout(() => {
      this.showCard1 = true;
    }, 1000);
    setTimeout(() => {
      this.revealCard1 = true;
    }, 6500);
    setTimeout(() => {
      this.showCard2 = true;
    }, 7000);
    setTimeout(() => {
      this.revealCard2 = true;
    }, 12500);
    setTimeout(() => {
      this.showCard3 = true;
    }, 13000);
    setTimeout(() => {
      this.revealCard3 = true;
    }, 24300);
    setTimeout(() => {
      this.beat = true
    }, 26000)
  }

}
