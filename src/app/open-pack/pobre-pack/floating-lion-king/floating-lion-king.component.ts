import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-floating-lion-king',
  templateUrl: './floating-lion-king.component.html',
  styleUrls: ['./floating-lion-king.component.scss']
})
export class FloatingLionKingComponent implements OnInit {
  @Input() count = 0;
  // @ViewChild('pngFloating') pngFloating: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // let imgs = this.pngFloating.nativeElement.querySelector('img')
  }
}
