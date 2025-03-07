import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OneDayToursComponent } from './pages/one-day-tours/one-day-tours.component';
import { ManyDaysToursComponent } from './pages/many-days-tours/many-days-tours.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'one-day-tours', component: OneDayToursComponent },
  { path: 'many-days-tours', component: ManyDaysToursComponent },
  { path: 'contact', component: ContactComponent },
];
