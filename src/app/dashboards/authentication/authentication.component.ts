import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AudioService } from 'src/app/shared/audio.service';
import { SelectItem } from 'primeng/api';
import { EPIC_SOUNDS } from 'src/app/constants/epic-sounds';
import { VIRGO_USERS } from 'src/app/constants/virgo-users';
import { AuthService } from 'src/app/shared/auth.service';

interface VirgoPlayer {
  label: string;
  value: string;
}

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthenticationComponent implements OnInit {
  virgoPlayers: SelectItem[];
  selectedPlayer: VirgoPlayer;

  constructor( private audioService: AudioService, private authService: AuthService ) { }

  ngOnInit(): void {
    this.playEpicAudio();

    this.virgoPlayers = [
      { label: 'Lord of D', value: VIRGO_USERS.ALEXIS},
      { label: 'Gokus ftw', value: VIRGO_USERS.BORE},
      { label: 'Indio a caballo', value: VIRGO_USERS.CHARLY},
      { label: 'EL OTP', value: VIRGO_USERS.JUAMPI},
      { label: 'kisio el masi', value: VIRGO_USERS.MAXI},
      { label: 'El del hoyo negro', value: VIRGO_USERS.NICO},
      { label: 'Juega con papelitos', value: VIRGO_USERS.RODRI},
      { label: 'Me llevo mi mazo a mi casa 💅', value: VIRGO_USERS.VALEN},
    ];

    this.selectedPlayer = this.virgoPlayers[0].value;
  }

  playEpicAudio() {
    const epicAudioPath = EPIC_SOUNDS.YU_GI_OH_OPENING;
    // this.audioService.playSound(epicAudioPath);
  }

  stopAudio() {
    this.audioService.stopSound();
  }

  goToHomePage() {
    console.log('seleccionado', this.selectedPlayer);
  }
}
