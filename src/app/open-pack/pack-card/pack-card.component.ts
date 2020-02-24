import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pack-card',
  templateUrl: './pack-card.component.html',
  styleUrls: ['./pack-card.component.scss']
})
export class PackCardComponent implements OnInit, OnChanges {
  @Input() number;
  @Input() showCard = false;
  @Input() revealCard = false;
  @Input() beat = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.showCard = changes.showCard ? changes.showCard.currentValue : this.showCard;
    this.revealCard = changes.revealCard ? changes.revealCard.currentValue : this.revealCard;
    this.beat = changes.beat ? changes.beat.currentValue : this.beat;
  }

}
