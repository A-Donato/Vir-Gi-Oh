import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/shared/services/card.service';
import { VirgiCard } from 'src/app/models/virgi-card';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor( private cardService: CardService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const queryParams = this.route.snapshot.queryParams;
    console.log('currentURL', queryParams);
    try {
      if (queryParams.id) {
        this.searchText = queryParams.id;
        this.executeSearch();
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  async executeSearch() {
    if (this.searchText) {
      try {
        this.virgiCard = await this.cardService.getVirgiCard(this.searchText);
        console.log('this.virgiCard', this.virgiCard);
        this.showCardDetail = !!this.virgiCard || this.showCardDetail;
      } catch (error) {
        this.virgiCard = null;
        this.showCardDetail = true;
        console.log('error', error);
      }
    } else {
      this.showCardDetail = false;
    }
  }

  goToAdvancedSearch() {
    this.router.navigate(['/advanced-search']);
  }
}
