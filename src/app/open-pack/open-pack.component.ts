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
    setTimeout(() => {
      this.packOpened = true;
    }, 5500);
  }
}
