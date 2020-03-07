import { Injectable } from '@angular/core';
import { VIRGO_USERS } from 'src/app/constants/virgo-users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentPlayer: string;
  constructor() { }

  selectPlayer( playerID ) {
    this.currentPlayer = playerID;
  }

  getPlayer() {
    // return VIRGO_USERS.CHESTER_TESTER;
    return this.currentPlayer;
  }
}
