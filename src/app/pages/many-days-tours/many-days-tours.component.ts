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
    'https://media.discordapp.net/attachments/1212367163361468471/1347958738849370142/6.png?ex=67cdb7e7&is=67cc6667&hm=2dd5787c43bf7175cdd7dcb3321fd1bab8e9d991591483baa07b62e49e1acd43&=&format=webp&quality=lossless&width=1421&height=800',
    'https://media.discordapp.net/attachments/1212367163361468471/1347958738019029106/5.png?ex=67cdb7e7&is=67cc6667&hm=ff1ce022bb58c04c033d9cedbc086c8201982b1b03f4faccacfc089703d2c9f7&=&format=webp&quality=lossless&width=1421&height=800',
    'https://media.discordapp.net/attachments/1212367163361468471/1347958742284767382/3.png?ex=67cdb7e8&is=67cc6668&hm=eac66936241970482dbc212f0ddf25de27984cbb6cabab3226e43dfba3e9d0b4&=&format=webp&quality=lossless&width=1421&height=800',
    'https://media.discordapp.net/attachments/1212367163361468471/1347958834617913447/10.png?ex=67cdb7fe&is=67cc667e&hm=63c5db6b94ecd04d8430535220b80f5343fa96b8a5a257463ab4cc5352031930&=&format=webp&quality=lossless&width=1421&height=800',
    'https://media.discordapp.net/attachments/1212367163361468471/1347958740648722492/1.png?ex=67cdb7e7&is=67cc6667&hm=a1b8d414f7942a300af70f5054487572bd62cfe1fe7e8da90617da52218a73db&=&format=webp&quality=lossless&width=1421&height=800',
    'https://media.discordapp.net/attachments/1212367163361468471/1347958741538045982/2.png?ex=67cdb7e7&is=67cc6667&hm=26de3056ec9db52aea9ebe195414859e87637b131bec202c8eba2f47f82c27da&=&format=webp&quality=lossless&width=1421&height=800',
  ];
}
