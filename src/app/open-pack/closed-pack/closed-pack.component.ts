import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-closed-pack',
  templateUrl: './closed-pack.component.html',
  styleUrls: ['./closed-pack.component.scss']
})
export class ClosedPackComponent implements OnInit {
  @Input() openPack = false;
  constructor() { }

  ngOnInit(): void {
  }

}
