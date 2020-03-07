import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenPackComponent } from './open-pack/open-pack.component';
import { PobrePackComponent } from './open-pack/pobre-pack/pobre-pack.component';
import { ClosedPackComponent } from './open-pack/closed-pack/closed-pack.component';
import { FloatingIcons } from './open-pack/pobre-pack/floating-icons/floating-icons.component';
import { TouchMeNotButtonComponent } from './open-pack/pobre-pack/touch-me-not-button/touch-me-not-button.component';
import { OpenedPackComponent } from './open-pack/opened-pack/opened-pack.component';
import { PackCardComponent } from './open-pack/pack-card/pack-card.component';
import { HttpClientModule } from '@angular/common/http';

// --------- PrimeNg Modules -----------
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LoadingScreenComponent } from './dashboards/loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenPackComponent,
    PobrePackComponent,
    ClosedPackComponent,
    FloatingIcons,
    TouchMeNotButtonComponent,
    OpenedPackComponent,
    PackCardComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
