import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';
import { AudioService } from 'src/app/shared/services/audio.service';
import { SelectItem } from 'primeng/api';
import { EPIC_SOUNDS } from 'src/app/constants/epic-sounds';
import { VIRGO_USERS } from 'src/app/constants/virgo-users';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/constants/routes-names';

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
  globalListenFunc: Function;

  constructor(private audioService: AudioService, private authService: AuthService, private router: Router, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.playEpicAudio();
    this.globalListenFunc = this.renderer.listen('document', 'keypress', e => {
      console.log(e);
    });
    this.virgoPlayers = [
      { label: 'Lord of D', value: VIRGO_USERS.ALEXIS },
      { label: 'Gokus ftw', value: VIRGO_USERS.BORE },
      { label: 'Indio a caballo', value: VIRGO_USERS.CHARLY },
      { label: 'EL OTP', value: VIRGO_USERS.JUAMPI },
      { label: 'kisio el masi', value: VIRGO_USERS.MAXI },
      { label: 'El del hoyo negro', value: VIRGO_USERS.NICO },
      { label: 'Juega con papelitos', value: VIRGO_USERS.RODRI },
      { label: 'Me llevo mi mazo a mi casa 💅', value: VIRGO_USERS.VALEN },
    ];

    this.selectedPlayer = this.virgoPlayers[0].value;
  }

  playEpicAudio() {
    const epicAudioPath = EPIC_SOUNDS.YU_GI_OH_OPENING;
    this.audioService.playSound(epicAudioPath);
  }

  stopAudio() {
    this.audioService.stopSound();
  }

  goToHomePage() {
    console.log('seleccionado', this.selectedPlayer);
    this.authService.selectPlayer(this.selectedPlayer);
    this.router.navigate([ROUTES.HOME_DASHBOARD]);
  }
  
}
