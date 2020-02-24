import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-pack',
  templateUrl: './open-pack.component.html',
  styleUrls: ['./open-pack.component.scss']
})
export class OpenPackComponent implements OnInit {

  packOpened = false;
  openingPack = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  openPack() {
    this.openingPack = true;
    var audio = new Audio();
    audio.src = '../../assets/mp3/rising-drums.mp3';
    audio.load();
    // audio.volume = 0;
    audio.play();
    audio.onended = () => {
      this.packOpened = true;
    }
  }
}
