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
  selectedGod: string;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.selectedGod = this.imagesOfGods[this.godIdentifier];
  }

  onClick() {
    this.router.navigate([this.redirectTo]);
  }

}
