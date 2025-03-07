import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-one-day-tours',
  standalone: true,
  imports: [CommonModule, RouterModule], // Import CommonModule
  templateUrl: './one-day-tours.component.html',
  styleUrls: ['./one-day-tours.component.scss'],
})
export class OneDayToursComponent {
  tours = [
    {
      title: 'City Exploration Tour',
      time: '10:00 AM - 6:00 PM',
      place: 'Downtown City',
      description:
        'A guided city tour with historical landmarks and local food.',
      image: 'assets/tours/city-tour.jpg',
    },
  ];
}
