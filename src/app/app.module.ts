import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenPackComponent } from './open-pack/open-pack.component';
import { PobrePackComponent } from './open-pack/pobre-pack/pobre-pack.component';
import { ClosedPackComponent } from './open-pack/closed-pack/closed-pack.component';
import { FloatingIcons } from './open-pack/pobre-pack/floating-icons/floating-icons.component';
import { TouchMeNotButtonComponent } from './open-pack/pobre-pack/touch-me-not-button/touch-me-not-button.component';
import { RegularPackComponent } from './open-pack/regular-pack/regular-pack.component';
import { SuperRarePackComponent } from './open-pack/super-rare-pack/super-rare-pack.component';
import { UltraRarePackComponent } from './open-pack/ultra-rare-pack/ultra-rare-pack.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenPackComponent,
    PobrePackComponent,
    ClosedPackComponent,
    FloatingIcons,
    TouchMeNotButtonComponent,
    RegularPackComponent,
    SuperRarePackComponent,
    UltraRarePackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
