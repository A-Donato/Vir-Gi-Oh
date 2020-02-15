import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pobre-pack',
  templateUrl: './pobre-pack.component.html',
  styleUrls: ['./pobre-pack.component.scss']
})
export class PobrePackComponent implements OnInit {
  allowExit = false;

  constructor() {
    var audio = new Audio();
    audio.src = '../../assets/mp3/baila-conmigo.mp3';
    audio.load();
    // audio.play();
  }

  ngOnInit(): void {
  }
}
