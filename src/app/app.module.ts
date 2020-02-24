import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenPackComponent } from './open-pack/open-pack.component';
import { PobrePackComponent } from './open-pack/pobre-pack/pobre-pack.component';
import { ClosedPackComponent } from './open-pack/closed-pack/closed-pack.component';
import { FloatingIcons } from './open-pack/pobre-pack/floating-icons/floating-icons.component';
import { TouchMeNotButtonComponent } from './open-pack/pobre-pack/touch-me-not-button/touch-me-not-button.component';
import { RarePackComponent } from './open-pack/rare-pack/rare-pack.component';
import { SuperRarePackComponent } from './open-pack/super-rare-pack/super-rare-pack.component';
import { UltraRarePackComponent } from './open-pack/ultra-rare-pack/ultra-rare-pack.component';
import { PackCardComponent } from './open-pack/pack-card/pack-card.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenPackComponent,
    PobrePackComponent,
    ClosedPackComponent,
    FloatingIcons,
    TouchMeNotButtonComponent,
    RarePackComponent,
    SuperRarePackComponent,
    UltraRarePackComponent,
    PackCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
