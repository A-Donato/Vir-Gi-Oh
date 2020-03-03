import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/shared/services/card.service';
import { VirgiCard } from 'src/app/models/virgi-card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gods = ['SLIFER', 'OBELISK', 'RA'];
  actions = ['Ver Deck', 'Comprar Pack', 'Liberar Cartas'];
  searchText = '';
  showCardDetail = false;
  virgiCard: VirgiCard;

  constructor( private cardService: CardService ) { }

  ngOnInit(): void {
  }

  async executeSearch() {
    if (this.searchText) {
      this.virgiCard = await this.cardService.getVirgiCard(this.searchText);
      console.log('this.virgiCard', this.virgiCard);
      this.showCardDetail = !!this.virgiCard || this.showCardDetail;
    } else {
      this.showCardDetail = false;
    }
  }
}
