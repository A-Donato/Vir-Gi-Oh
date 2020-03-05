import { Component, OnInit, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { VirgiCard } from 'src/app/models/virgi-card';
@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardDetailComponent implements OnInit, OnChanges {
  @Input() virgiCard: VirgiCard;

  isInVirgoGameLabel = '';
  isInVirgoGamePicture = '';
  virgoNota = '';
  virgoErrorMessage = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log('la virgiCard')
    if (this.virgiCard) {
      if (this.virgiCard.inPlay) {
        this.isInVirgoGameLabel = 'PERO QUE PREGUUUUUNTA';
        this.isInVirgoGamePicture = null;
      } else {
        this.isInVirgoGamePicture = 'assets/png/esta-pikachu.png';
        this.isInVirgoGameLabel = null;
      }
      this.virgoNota = this.virgiCard.notes ? this.virgiCard.notes : 'Virgoninguna';
    } else {
      this.virgoErrorMessage = 'Ha habido un virgo error o sos un virgo idiota que no cargó bien el virgo ID';
    }
  }
}
