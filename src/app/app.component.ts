import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(document:keypress)': 'handleKeyboardEvent($event)'
  },
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'vir-gi-oh';
  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
    ];
  }

    
  handleKeyboardEvent(event: KeyboardEvent) { 
    console.log(event.key);
  }
}
