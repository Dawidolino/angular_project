import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  protected HousinglocationList:Housinglocation[]=[
  
    {
      id: 1,
      name: 'Mięso',
      city: 'Mięsowo',
      state: 'Mięsk',
      photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,fl_progressive,c_pad,b_white,w_260,h_260/v1593174240/8546.png',
      availableUnit: 10,
      wifi: true,
      laundry: false
    },
    {
      id: 2,
      name: 'Szkolna 17' ,
      city: 'Białystok',
      state: 'PL',
      photo: 'https://d-art.ppstatic.pl/kadry/k/r/1/8f/37/55c6449030779_o_medium.jpg',
      availableUnit: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 3,
      name: 'Urzędnicza 2' ,
      city: 'Toruń',
      state: 'PL',
      photo: 'https://d-art.ppstatic.pl/kadry/k/r/1/6a/74/5b914874c6eda_o_full.jpg',
      availableUnit: 10,
      wifi: true,
      laundry: false
      },
    {
      id: 4,
      name: 'Mięso 4',
      city: 'Wałbrzych',
      state: 'PL',
      photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,fl_progressive,c_pad,b_white,w_260,h_260/v1696459926/42407.png',
      availableUnit: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Złota 44',
      city: 'Warszawa',
      state: 'PL',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnzHUwMyyRTjI6G7ETLi32pTVc_OQ3_Iji_A&usqp=CAU',
      availableUnit: 1,
      wifi: true,
      laundry: false
      }
    ]
getAllHousingLocations(): Housinglocation[] {
  return this.HousinglocationList;
}

getHousingLocationById(id: number): Housinglocation | undefined {
  return this.HousinglocationList.find(housingLocation => housingLocation.id === id);
}
}
