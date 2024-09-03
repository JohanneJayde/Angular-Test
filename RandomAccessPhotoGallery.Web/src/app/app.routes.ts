import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoremPicsumComponent } from './lorem-picsum/lorem-picsum.component';
import { DogCeoApiComponent } from './dog-ceo-api/dog-ceo-api.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'LoremPicsum',
    component: LoremPicsumComponent,
    title: 'Lorem Picsum',
  },
  {
    path: 'DogCeoApi',
    component: DogCeoApiComponent,
    title: 'Dog Ceo API',
  },
];
