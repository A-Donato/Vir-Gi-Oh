import { Component, OnInit } from '@angular/core';
import { VirgiCard } from 'src/app/models/virgi-card';
import { CardService } from 'src/app/shared/services/card.service';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {
  columns: any[];
  virgiCards: VirgiCard[];

  constructor( private cardService: CardService ) { }

  ngOnInit(): void {
    // this.cardService.getAllCards().then(cards => this.virgiCards = cards);

    this.columns = [
      { field: 'name', header: 'Nombre' },
      { field: 'inPlay', header: 'En Juego' },
      { field: 'type', header: 'Typo' },
    ];
  }

}
