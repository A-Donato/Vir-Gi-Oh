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
     SLIFER: 'assets/slifer.png',
     OBELISK: 'assets/obelisk.png',
     RA: 'assets/ra.png'
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
