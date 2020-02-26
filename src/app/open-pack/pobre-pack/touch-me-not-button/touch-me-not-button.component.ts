import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-touch-me-not-button',
  templateUrl: './touch-me-not-button.component.html',
  styleUrls: ['./touch-me-not-button.component.scss']
})
export class TouchMeNotButtonComponent implements OnInit, OnChanges {
  @Input() show = false;
  exitButtonText = 'Salir';
  exitButtonHovers = 0;
  exitButtonLabels = ['Cuchao!', 'Cuchao!', 'Te la creíste xd. Salir', 'Cachica!', 'Cachica!', 'Soy el rasho makuin xd'];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.show = changes.show.currentValue;
  }

  exit() {
    // This check is in order to not exit if button is clicked before all movements are made
    // This can happen if user is fast or if on mobile
    if (this.exitButtonHovers === this.exitButtonLabels.length) {
      // this.router.navigate(['']);
    }
  }

  onHoverExitButton() {
    this.exitButtonText = this.exitButtonLabels[this.exitButtonHovers];
    if (this.exitButtonHovers !== this.exitButtonLabels.length) {
      this.moveButton();
      this.exitButtonHovers++;
    } else {
      const button = document.getElementById('touchMeNot');
      button.style.top = (window.innerHeight - 200) + 'px';
      button.style.left = (window.innerWidth / 2 - 50) + 'px';
      this.exitButtonText = 'Salir';
    }
  }

  private moveButton() {
    const button = document.getElementById('touchMeNot');
    button.style.top = Math.round(Math.random() * (window.innerHeight - 100)) + 'px';
    button.style.left = Math.round(Math.random() * (window.innerWidth - 200)) + 'px';
    var audio = new Audio();
    audio.src = '../../assets/mp3/teleport.mp3';
    audio.load();
    audio.volume = 1;
    audio.play();
  }
}
