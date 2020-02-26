import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gods-icons',
  templateUrl: './gods-icons.component.html',
  styleUrls: ['./gods-icons.component.scss']
})
export class GodsIconsComponent implements OnInit {
  imagesOfGods = {
     SLIFER: 'assets/slifer.png',
     OBELISK: 'assets/obelisk.png',
     RA: 'assets/ra.png'
  };
  selectedGod: string;

  constructor() { }
  @Input() godIdentifier: string;

  ngOnInit(): void {
    this.selectedGod = this.imagesOfGods[this.godIdentifier];
  }

}
