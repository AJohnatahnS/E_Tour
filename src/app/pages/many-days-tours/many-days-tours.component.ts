import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-many-days-tours',
  standalone: true,
  imports: [CommonModule, RouterModule], // Import CommonModule
  templateUrl: './many-days-tours.component.html',
  styleUrls: ['./many-days-tours.component.scss'],
})
export class ManyDaysToursComponent {
  tourSchedule = [
    {
      title: 'Day 1 - Morning Activities',
      daytimeImages: [
        'assets/multi-day/day1-morning1.jpg',
        'assets/multi-day/day1-morning2.jpg',
      ],
      nightImages: [
        'assets/multi-day/day1-night1.jpg',
        'assets/multi-day/day1-night2.jpg',
      ],
    },
  ];
}
