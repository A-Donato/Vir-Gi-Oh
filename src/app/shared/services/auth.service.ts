import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentPlayer: string;
  constructor() { }

  selectPlayer( playerID ) {
    this.currentPlayer = playerID;
  }
}
