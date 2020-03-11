import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gods-icons',
  templateUrl: './gods-icons.component.html',
  styleUrls: ['./gods-icons.component.scss']
})
export class GodsIconsComponent implements OnInit {
  @Input() godIdentifier: string;
  @Input() actionName: string;
  @Input() redirectTo: string;
  imagesOfGods = {
     SLIFER: 'assets/png/slifer.png',
     OBELISK: 'assets/png/obelisk.png',
     RA: 'assets/png/ra.png'
  };
  smokes = new Array(8);
  selectedGod: string;
  selectedGodName: string;
  hoveredGod: any;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.selectedGod = this.imagesOfGods[this.godIdentifier];
    this.selectedGodName = Object.keys(this.imagesOfGods).find(key => this.imagesOfGods[key] === this.selectedGod);
    console.log('sele', this.selectedGodName);
  }

  onClick() {
    this.router.navigate([this.redirectTo]);
  }

  hoverListItem(opportunity, entered) {
    this.hoveredGod = entered ? opportunity : '';
    console.log('hovered ', this.hoveredGod);
 }
}
