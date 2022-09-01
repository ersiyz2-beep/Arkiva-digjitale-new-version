import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';
import {ButtonModule} from "primeng/button";
import { HomeComponent } from './home/home.component';
import { MapArchiveComponent } from './map-archive/map-archive.component';
import {AppRoutingModule} from "./app-routing.module";
import { ArchiveComponent } from './archive/archive.component';
import {DialogModule} from "primeng/dialog";
import { TiraneComponent } from './albania-city/tirane/tirane.component';
import { BeratComponent } from './albania-city/berat/berat.component';
import { DiberComponent } from './albania-city/diber/diber.component';
import { DurresComponent } from './albania-city/durres/durres.component';
import { ElbasanComponent } from './albania-city/elbasan/elbasan.component';
import { FierComponent } from './albania-city/fier/fier.component';
import { GjirokasterComponent } from './albania-city/gjirokaster/gjirokaster.component';
import { KorceComponent } from './albania-city/korce/korce.component';
import { KukesComponent } from './albania-city/kukes/kukes.component';
import { LezheComponent } from './albania-city/lezhe/lezhe.component';
import { ShkoderComponent } from './albania-city/shkoder/shkoder.component';
import { VloreComponent } from './albania-city/vlore/vlore.component';
import { MitrushKuteliComponent } from './albania-city/tirane/Autoret/mitrush-kuteli/mitrush-kuteli.component';
import { DriteroAgolliComponent } from './albania-city/tirane/Autoret/dritero-agolli/dritero-agolli.component';
import { LoginComponent } from './auth-components/login/login.component';
import { RegisterComponent } from './auth-components/register/register.component';
import { ElbasanMapComponent } from './albania-city/elbasan/elbasan-map/elbasan-map.component';
import { TiranaMapComponent } from './albania-city/tirane/tirana-map/tirana-map.component';
import { TiranaAuthorListComponent } from './albania-city/tirane/tirana-author-list/tirana-author-list.component';
import { BeratMapComponent } from './albania-city/berat/berat-map/berat-map.component';
import { DiberMapComponent } from './albania-city/diber/diber-map/diber-map.component';
import { DurresMapComponent } from './albania-city/durres/durres-map/durres-map.component';
import { FierMapComponent } from './albania-city/fier/fier-map/fier-map.component';
import { GjirokasterMapComponent } from './albania-city/gjirokaster/gjirokaster-map/gjirokaster-map.component';
import { VloreMapComponent } from './albania-city/vlore/vlore-map/vlore-map.component';
import { KorceMapComponent } from './albania-city/korce/korce-map/korce-map.component';
import { KukesMapComponent } from './albania-city/kukes/kukes-map/kukes-map.component';
import { LezheMapComponent } from './albania-city/lezhe/lezhe-map/lezhe-map.component';
import { ShkoderMapComponent } from './albania-city/shkoder/shkoder-map/shkoder-map.component';
import { ShkoderAuthorListComponent } from './albania-city/shkoder/shkoder-author-list/shkoder-author-list.component';
import { VloreAuthorListComponent } from './albania-city/vlore/vlore-author-list/vlore-author-list.component';
import { GjirokasterAuthorListComponent } from './albania-city/gjirokaster/gjirokaster-author-list/gjirokaster-author-list.component';
import { BeratAuthorListComponent } from './albania-city/berat/berat-author-list/berat-author-list.component';
import { FierAuthorListComponent } from './albania-city/fier/fier-author-list/fier-author-list.component';
import { KorceAuthorListComponent } from './albania-city/korce/korce-author-list/korce-author-list.component';
import { KukesAuthorListComponent } from './albania-city/kukes/kukes-author-list/kukes-author-list.component';
import { DurresAuthorListComponent } from './albania-city/durres/durres-author-list/durres-author-list.component';
import { LezheAuthorListComponent } from './albania-city/lezhe/lezhe-author-list/lezhe-author-list.component';
import { DiberAuthorListComponent } from './albania-city/diber/diber-author-list/diber-author-list.component';
import { UsersComponent } from './auth-components/users/users.component';
import { ElbasanAuthorListComponent } from './albania-city/elbasan/elbasan-author-list/elbasan-author-list.component';
import { CarouselMapComponent } from './map-archive/carousel-map/carousel-map.component';
import {CarouselModule} from "primeng/carousel";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MapArchiveComponent,
    ArchiveComponent,
    TiraneComponent,
    BeratComponent,
    DiberComponent,
    DurresComponent,
    ElbasanComponent,
    FierComponent,
    GjirokasterComponent,
    KorceComponent,
    KukesComponent,
    LezheComponent,
    ShkoderComponent,
    VloreComponent,
    MitrushKuteliComponent,
    DriteroAgolliComponent,
    LoginComponent,
    RegisterComponent,
    ElbasanMapComponent,
    TiranaMapComponent,
    TiranaAuthorListComponent,
    BeratMapComponent,
    DiberMapComponent,
    DurresMapComponent,
    FierMapComponent,
    GjirokasterMapComponent,
    VloreMapComponent,
    KorceMapComponent,
    KukesMapComponent,
    LezheMapComponent,
    ShkoderMapComponent,
    ShkoderAuthorListComponent,
    VloreAuthorListComponent,
    GjirokasterAuthorListComponent,
    BeratAuthorListComponent,
    FierAuthorListComponent,
    KorceAuthorListComponent,
    KukesAuthorListComponent,
    DurresAuthorListComponent,
    LezheAuthorListComponent,
    DiberAuthorListComponent,
    UsersComponent,
    ElbasanAuthorListComponent,
    CarouselMapComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ButtonModule,
    AppRoutingModule,
    DialogModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
