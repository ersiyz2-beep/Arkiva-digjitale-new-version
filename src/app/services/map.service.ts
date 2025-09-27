import { Injectable } from '@angular/core';

export interface AlbanianCity {
  id: string;
  name: string;
  displayName: string;
  route: string;
  description: string;
  population?: number;
  area?: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private cities: AlbanianCity[] = [
    {
      id: 'AL-01',
      name: 'berat',
      displayName: 'Berat',
      route: '/berat',
      description: 'Qyteti i dritareve të bardha dhe trashëgimia UNESCO',
      population: 60031,
      area: 939,
      coordinates: { lat: 40.7058, lng: 19.9522 }
    },
    {
      id: 'AL-09',
      name: 'diber',
      displayName: 'Dibër',
      route: '/diber',
      description: 'Rajoni malor me natyrë të mahnitshme',
      population: 134153,
      area: 2586,
      coordinates: { lat: 41.9094, lng: 20.4189 }
    },
    {
      id: 'AL-02',
      name: 'durres',
      displayName: 'Durrës',
      route: '/durres',
      description: 'Porti kryesor dhe qyteti bregdetar historik',
      population: 175110,
      area: 766,
      coordinates: { lat: 41.3275, lng: 19.4469 }
    },
    {
      id: 'AL-03',
      name: 'elbasan',
      displayName: 'Elbasan',
      route: '/elbasan',
      description: 'Qendra industriale dhe kulturore e vendit',
      population: 141714,
      area: 3199,
      coordinates: { lat: 41.1125, lng: 20.0822 }
    },
    {
      id: 'AL-04',
      name: 'fier',
      displayName: 'Fier',
      route: '/fier',
      description: 'Qyteti i naftës dhe bujqësisë',
      population: 120655,
      area: 1890,
      coordinates: { lat: 40.7239, lng: 19.5556 }
    },
    {
      id: 'AL-05',
      name: 'gjirokaster',
      displayName: 'Gjirokastër',
      route: '/gjirokaster',
      description: 'Qyteti muze dhe vendlindja e Ismail Kadaresë',
      population: 28673,
      area: 2884,
      coordinates: { lat: 40.0758, lng: 20.1392 }
    },
    {
      id: 'AL-06',
      name: 'korce',
      displayName: 'Korçë',
      route: '/korce',
      description: 'Qyteti i serenades dhe kulturës',
      population: 75994,
      area: 3711,
      coordinates: { lat: 40.6186, lng: 20.7808 }
    },
    {
      id: 'AL-07',
      name: 'kukes',
      displayName: 'Kukës',
      route: '/kukes',
      description: 'Porta veriore e Shqipërisë',
      population: 59013,
      area: 2374,
      coordinates: { lat: 42.0772, lng: 20.4214 }
    },
    {
      id: 'AL-08',
      name: 'lezhe',
      displayName: 'Lezhë',
      route: '/lezhe',
      description: 'Qyteti historik i Skënderbeut',
      population: 65633,
      area: 1620,
      coordinates: { lat: 41.7836, lng: 19.6436 }
    },
    {
      id: 'AL-10',
      name: 'shkoder',
      displayName: 'Shkodër',
      route: '/shkoder',
      description: 'Kryeqyteti kulturor i veriut',
      population: 135612,
      area: 3562,
      coordinates: { lat: 42.0687, lng: 19.5126 }
    },
    {
      id: 'AL-11',
      name: 'tirane',
      displayName: 'Tiranë',
      route: '/tirane',
      description: 'Kryeqyteti dhe qendra politike e vendit',
      population: 557422,
      area: 1652,
      coordinates: { lat: 41.3275, lng: 19.8189 }
    },
    {
      id: 'AL-12',
      name: 'vlore',
      displayName: 'Vlorë',
      route: '/vlore',
      description: 'Qyteti i pavarësisë dhe Riviera Shqiptare',
      population: 104827,
      area: 2706,
      coordinates: { lat: 40.4686, lng: 19.4914 }
    }
  ];

  getCities(): AlbanianCity[] {
    return this.cities;
  }

  getCityById(id: string): AlbanianCity | undefined {
    return this.cities.find(city => city.id === id);
  }

  getCityByName(name: string): AlbanianCity | undefined {
    return this.cities.find(city => city.name === name);
  }
}