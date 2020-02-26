import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

const IMG_WIDTH = 100;
const IMG_HEIGHT = 100;

@Component({
  selector: 'app-floating-icons',
  templateUrl: './floating-icons.component.html',
  styleUrls: ['./floating-icons.component.scss']
})
export class FloatingIcons implements OnInit, AfterViewInit {
  @Input() count = 0;
  imagesToRender;

  constructor() { }

  ngOnInit(): void {
    this.imagesToRender = Array(this.count);
  }

  ngAfterViewInit() {
    this.animateIcons();
  }

  private animateIcons() {
    let iconsFloating = Array.from(document.getElementsByClassName('png-floating'));
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;
    const maxRotation = 1080; //deg
    iconsFloating.forEach((icon, index) => {
      const top = Math.random() * (maxHeight - 400);
      const left = Math.random() * (maxWidth - 800);
      const bottom = Math.random() * (maxHeight - 400);
      const right = Math.random() * (maxWidth - 800);
      const rotation = Math.random() * maxRotation;

      const fromTopLeft = [
        { transform: `translate(${0 - left}px, ${0 - top}px) rotate(0deg)` },
        { transform: `translate(${maxWidth + IMG_WIDTH + right}px, ${maxHeight + IMG_HEIGHT + bottom}px) rotate(${rotation}deg)` }
      ]

      const fromTopRight = [
        { transform: `translate(${maxWidth + IMG_WIDTH + right}px, ${0 - top}px) rotate(0deg)` },
        { transform: `translate(${0 - left}px, ${maxHeight + IMG_HEIGHT + bottom}px) rotate(${rotation}deg)` }
      ]

      const fromBottomRight = [
        { transform: `translate(${maxWidth + IMG_WIDTH + left}px, ${maxHeight + IMG_HEIGHT + top}px) rotate(0deg)` },
        { transform: `translate(${0 - right}px, ${0 - bottom}px) rotate(${rotation}deg` }
      ]

      const fromBottomLeft = [
        { transform: `translate(${0 - left}px, ${maxHeight + IMG_HEIGHT + top}px) rotate(0deg)` },
        { transform: `translate(${maxWidth + IMG_WIDTH + right}px, ${0 - bottom}px) rotate(${rotation}deg` }
      ]
      const position = index % 4;
      let animation;
      switch (position) {
        case 0: 
          animation = fromTopLeft
          break;
        case 1: 
          animation = fromTopRight
          break;
        case 2: 
          animation = fromBottomRight
          break;
        case 3: 
          animation = fromBottomLeft
          break;
      }
      icon.animate(animation, {
        easing: 'linear',
        delay: 1000 + (Math.random() * index * 500),
        duration: 10000 + (Math.random() * index * 100),
        iterations: Infinity
      })
    })
  }
}
