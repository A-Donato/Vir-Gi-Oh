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
  redirectTo = ['deck', 'open', 'cards?']
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async executeSearch() {
  }

  goToAdvancedSearch() {
    this.router.navigate(['/advanced-search']);
  }
}
