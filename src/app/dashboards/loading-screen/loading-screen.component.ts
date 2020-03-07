import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {
  loaded = false;
  constructor(private httpClient: HttpClient, private router: Router) { }
  
  ngOnInit(): void {
    // this.loadAssets();
  }

  loadAssets() {
    const assetsPath = '../../../assets'
    const mp3Files = [
      `${assetsPath}/mp3/baila-conmigo.mp3`,
      `${assetsPath}/mp3/explosion.mp3`,
      `${assetsPath}/mp3/giants.mp3`,
      `${assetsPath}/mp3/opening.mp3`,
      `${assetsPath}/mp3/rising-drums.mp3`,
      `${assetsPath}/mp3/silbato.mp3`,
      `${assetsPath}/mp3/spaceman.mp3`,
      `${assetsPath}/mp3/teleport.mp3`,
      `${assetsPath}/mp3/tusa-8-bits.mp3`
    ];
    const gifFiles = [
      `${assetsPath}/gif/explosion-after.gif`,
      `${assetsPath}/gif/explosion.gif`,
      `${assetsPath}/gif/ultra-rare-1.gif`,
      `${assetsPath}/gif/ultra-rare-2.gif`,
      `${assetsPath}/gif/ultra-rare-3.gif`,
      `${assetsPath}/gif/ultra-rare-4.gif`,
      `${assetsPath}/gif/ultra-rare-5.gif`
    ];
    const pngFiles = [
      `${assetsPath}/png/card-back.png`,
      `${assetsPath}/png/esta-pikachu.png`,
      `${assetsPath}/png/kuriboh.png`,
      `${assetsPath}/png/lion-king.png`,
      `${assetsPath}/png/obelisk.png`,
      `${assetsPath}/png/pack-left.png`,
      `${assetsPath}/png/pack-right.png`,
      `${assetsPath}/png/ra.png`,
      `${assetsPath}/png/slifer.png`,
      `${assetsPath}/png/timon.png`,
      `${assetsPath}/png/virgioh-logo.png`,
      `${assetsPath}/png/yugioh-logo.png`,
    ]
    const assets = [...mp3Files, ...gifFiles, ...pngFiles];
    let observables = [];
    assets.forEach(asset => {
      observables.push(this.httpClient.get(asset));
    })
    forkJoin(...observables).subscribe(() => {
      this.loaded = true;
      // this.router.navigate(['auth'])
    }, () => {
      this.loaded = true;
      // this.router.navigate(['auth'])
    }, () => {
      this.loaded = true;
      // this.router.navigate(['auth'])
    })
  }

}
