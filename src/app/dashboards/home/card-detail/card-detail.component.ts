import { Component, OnInit, Input } from '@angular/core';
import { VirgiCard } from 'src/app/models/virgi-card';
@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  @Input() virgiCard: VirgiCard;

  constructor() { }

  ngOnInit(): void {
  }

}
