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
  selectedVirgiCardId: any;
  selectedVirgiCard: VirgiCard;
  showDetails = false;
  actualRows: any;
  actualTributing: number;
  normalCards: number;
  rareCards: number;
  superRareCards: number;
  ultraRarelCards: number;
  showTable = false;

  constructor( private cardService: CardService ) { }

  ngOnInit(): void {
    this.cardService.getAllVirgiCards().then( cards => {
      this.virgiCards = cards;
      this.showTable = true;
    });

    this.columns = [
      { field: 'name', header: 'Nombre' },
      { field: 'id', header: 'ID' },
      { field: 'rarity', header: 'Rareza' },
      { field: 'rating', header: 'Rating' },
      { field: 'owner', header: 'Dueño' },
      { field: 'inPlay', header: 'En Juego' },
      { field: 'type', header: 'Typo' },
    ];
  }

  goToDetails(id) {
    try {
      this.cardService.getVirgiCard(id).then( virgiCard => {
        this.selectedVirgiCard = virgiCard;
        this.getExtraInfo();
      });
    } catch (httpError) {
      console.log('algo paso macho');
    }
    this.selectedVirgiCardId = id;
    // window.open(`https://ygo-ud.firebaseapp.com/home/?id=${id}`, '_blank');
  }


  getExtraInfo() {
    this.cardService.getVirgiExtraData(this.selectedVirgiCardId).then(extraDataArray => {
      const extraData = extraDataArray[0];
      this.selectedVirgiCard.desc = extraData.desc;
      this.selectedVirgiCard.race = extraData.race;
      this.selectedVirgiCard.attribute = extraData.attribute;
      this.selectedVirgiCard.type = extraData.type;
      this.showDetails = true;
    });
  }

  onSidebarHide() {
    this.showDetails = false;
  }

  setNumberOfRows(event) {
    this.actualRows = event.filteredValue.length;
    this.calculateTributing(event.filteredValue);
  }

  calculateTributing(cards) {
    let price = 0;
    let normals = 0;
    let rares = 0;
    let superRares = 0;
    let ultraRares = 0;
    cards.forEach(card => {
      switch(card.rarity) {
        case 'N':
          price += 5;
          normals++;
          break;
        case 'R':
          price += 15;
          rares++;
          break;
        case 'SR':
          price += 30;
          superRares++;
          break;
        case 'UR':
          price += 40;
          ultraRares++;
          break;
        default:
          price += 0;
      }
    });
    this.actualTributing = price;
    this.normalCards = normals;
    this.rareCards = rares;
    this.superRareCards = superRares;
    this.ultraRarelCards = ultraRares;
  }
}
