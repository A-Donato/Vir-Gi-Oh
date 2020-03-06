import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-virgi-card-details',
  templateUrl: './virgi-card-details.component.html',
  styleUrls: ['./virgi-card-details.component.scss']
})
export class VirgiCardDetailsComponent implements OnInit, OnChanges {
  @Input() virgiCard;
  isInVirgoGameLabel: string;
  isInVirgoGamePicture: any;
  virgoNota: any;
  virgoErrorMessage: string;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.completeFields();
  }

  private completeFields() {
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
