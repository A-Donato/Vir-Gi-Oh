import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenPackComponent } from './open-pack/open-pack.component';
import { PobrePackComponent } from './open-pack/pobre-pack/pobre-pack.component';
import { ClosedPackComponent } from './open-pack/closed-pack/closed-pack.component';
import { FloatingLionKingComponent } from './open-pack/pobre-pack/floating-lion-king/floating-lion-king.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenPackComponent,
    PobrePackComponent,
    ClosedPackComponent,
    FloatingLionKingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
