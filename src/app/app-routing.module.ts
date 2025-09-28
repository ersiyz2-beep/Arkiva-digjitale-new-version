import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MapArchiveComponent } from './map-archive/map-archive.component';
import { ArchiveComponent } from './archive/archive.component';
import { TiraneComponent } from './albania-city/tirane/tirane.component';
import { DiberComponent } from './albania-city/diber/diber.component';
import { ElbasanComponent } from './albania-city/elbasan/elbasan.component';
import { ShkoderComponent } from './albania-city/shkoder/shkoder.component';
import { KukesComponent } from './albania-city/kukes/kukes.component';
import { LezheComponent } from './albania-city/lezhe/lezhe.component';
import { DurresComponent } from './albania-city/durres/durres.component';
import { FierComponent } from './albania-city/fier/fier.component';
import { BeratComponent } from './albania-city/berat/berat.component';
import { KorceComponent } from './albania-city/korce/korce.component';
import { VloreComponent } from './albania-city/vlore/vlore.component';
import { GjirokasterComponent } from './albania-city/gjirokaster/gjirokaster.component';
import { MitrushKuteliComponent } from './albania-city/tirane/Autoret/mitrush-kuteli/mitrush-kuteli.component';
import { DriteroAgolliComponent } from './albania-city/tirane/Autoret/dritero-agolli/dritero-agolli.component';
import { LoginComponent } from './auth-components/login/login.component';
import { RegisterComponent } from './auth-components/register/register.component';
import { CarouselMapComponent } from './map-archive/carousel-map/carousel-map.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map-archive', component: MapArchiveComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'tirane', component: TiraneComponent },
  { path: 'diber', component: DiberComponent },
  { path: 'elbasan', component: ElbasanComponent },
  { path: 'shkoder', component: ShkoderComponent },
  { path: 'kukes', component: KukesComponent },
  { path: 'lezhe', component: LezheComponent },
  { path: 'durres', component: DurresComponent },
  { path: 'fier', component: FierComponent },
  { path: 'berat', component: BeratComponent },
  { path: 'korce', component: KorceComponent },
  { path: 'vlore', component: VloreComponent },
  { path: 'gjirokaster', component: GjirokasterComponent },
  { path: 'mitrush-kuteli', component: MitrushKuteliComponent },
  { path: 'dritero-agolli', component: DriteroAgolliComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'carousel', component: CarouselMapComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }