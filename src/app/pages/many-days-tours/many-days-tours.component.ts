import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-many-days-tours',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './many-days-tours.component.html',
  styleUrls: ['./many-days-tours.component.scss'],
})
export class ManyDaysToursComponent {
  tour = {
    title: '3 Days 2 Nights Luxury – อุบลราชธานี',
    type: 'Luxury Cultural & Nature Tour',
    duration: '3 วัน 2 คืน',
    price: '39,900 บาท/คน',
    groupSize: '6 - 10 คน',
    transport: 'บิน Business Class + รถตู้ VIP Mercedes-Benz',
    accommodation: 'The Bliss Ubon (5 ดาว) หรือ Villa Private Pool',
    schedule: [
      {
        day: 'วันแรก',
        events: [
          { time: '10:00 น.', activity: 'บินจากกรุงเทพฯ (Business Class)' },
          {
            time: '12:00 น.',
            activity: 'ถึงอุบลฯ รถ Mercedes-Benz รับที่สนามบิน',
          },
          { time: '13:00 น.', activity: 'เช็คอินที่โรงแรม The Bliss Ubon' },
          { time: '14:00 น.', activity: 'อาหารกลางวัน Fine Dining' },
          {
            time: '16:00 น.',
            activity: 'Exclusive Sunset Boat Tour + Champagne',
          },
          { time: '19:00 น.', activity: 'อาหารค่ําที่ Private Villa' },
        ],
      },
      {
        day: 'วันที่สอง',
        events: [
          { time: '08:00 น.', activity: 'อาหารเช้าที่โรงแรม' },
          { time: '10:00 น.', activity: 'เที่ยวผาแต้ม พร้อมช่างภาพส่วนตัว' },
          {
            time: '12:00 น.',
            activity: 'Private Picnic Lunch ที่ริมแม่น้ําโขง',
          },
          { time: '14:00 น.', activity: 'Exclusive Spa Treatment ที่โรงแรม' },
          { time: '19:00 น.', activity: 'อาหารค่ําระดับ Michelin Star' },
        ],
      },
      {
        day: 'วันที่สาม',
        events: [
          { time: '09:00 น.', activity: 'Brunch และช้อปปิ้งของฝากพรีเมียม' },
          { time: '12:00 น.', activity: 'เดินทางกลับโดย Business Class' },
        ],
      },
    ],
  };

  // Image list for the left-side column
  tourImages = [
    'https://media.discordapp.net/attachments/1212367163361468471/1347776728138907730/12.png?ex=67cd0e64&is=67cbbce4&hm=2362f7de01e6938c13888a017c78500716683c2f49b01f2713a145157dfbbdc7&=&format=webp&quality=lossless&width=1421&height=800',
    'https://media.discordapp.net/attachments/1212367163361468471/1347776727316828180/11.png?ex=67cd0e64&is=67cbbce4&hm=38b6a8747b13c064d01d8794624d44ff1c26c3b7d602e55eaef63cb798f7eb71&=&format=webp&quality=lossless&width=1421&height=800',
    'https://media.discordapp.net/attachments/1212367163361468471/1347776726511648869/9.png?ex=67cd0e64&is=67cbbce4&hm=a1bbb8014ab9bebc1d555a617055cb67946a959b58778010dffd0ecdcc697d69&=&format=webp&quality=lossless&width=1421&height=800',
  ];
}
