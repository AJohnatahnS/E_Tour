import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-one-day-tours',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './one-day-tours.component.html',
  styleUrls: ['./one-day-tours.component.scss'],
})
export class OneDayToursComponent {
  tour = {
    title: 'One Day Luxury Tour – อุบลราชธานี',
    type: 'Luxury Cultural & Nature Tour',
    duration: '1 วัน',
    price: '15,900 บาท/คน',
    groupSize: '6 - 10 คน',
    transport:
      'รถตู้ VIP แบบ Mercedes-Benz หรือ Alphard พร้อม Wi-Fi และเครื่องดื่มพรีเมียม',
    accommodation: 'โรงแรม The Bliss Ubon (5 ดาว)',
    schedule: [
      {
        time: '06:00 น.',
        activity: 'รับลูกค้าจากโรงแรม สนามบิน หรือสถานีรถไฟ',
      },
      { time: '07:30 น.', activity: 'อาหารเช้าแบบ Brunch ที่ โรงแรมหรู' },
      {
        time: '09:00 น.',
        activity: 'เที่ยว ผาแต้ม (พร้อมไกด์ส่วนตัวและมุมถ่ายภาพพิเศษ)',
      },
      {
        time: '11:00 น.',
        activity:
          'Private Boat Tour ล่องแม่น้ําโขงชมสามพันโบก พร้อมแชมเปญ & คานาเป้',
      },
      {
        time: '13:00 น.',
        activity: 'อาหารกลางวัน Fine Dining ที่ร้านอาหารวิวแม่น้ํา',
      },
      {
        time: '15:00 น.',
        activity: 'ชมวัดทุ่งศรีเมืองแบบ Exclusive พร้อมพิธีทําบุญส่วนตัว',
      },
      {
        time: '17:00 น.',
        activity: 'จิบไวน์ที่ Rooftop Bar หรูในตัวเมืองอุบลฯ',
      },
      { time: '19:00 น.', activity: 'เดินทางส่งกลับที่พัก/สนามบิน' },
    ],
  };

  // Background slideshow images
  backgroundImages = [
    'https://media.discordapp.net/attachments/1212367163361468471/1347776725647495268/8.png?ex=67cd0e63&is=67cbbce3&hm=21fbe94af920d9420e3dcc74e8d2c5dfff20f662260b95438762f7872697d232&=&format=webp&quality=lossless&width=1421&height=800',
    'https://media.discordapp.net/attachments/1212367163361468471/1347776726511648869/9.png?ex=67cd0e64&is=67cbbce4&hm=a1bbb8014ab9bebc1d555a617055cb67946a959b58778010dffd0ecdcc697d69&=&format=webp&quality=lossless&width=1421&height=800',
    'https://media.discordapp.net/attachments/1212367163361468471/1347776727316828180/11.png?ex=67cd0e64&is=67cbbce4&hm=38b6a8747b13c064d01d8794624d44ff1c26c3b7d602e55eaef63cb798f7eb71&=&format=webp&quality=lossless&width=1421&height=800',
    'https://media.discordapp.net/attachments/1212367163361468471/1347776728138907730/12.png?ex=67cd0e64&is=67cbbce4&hm=2362f7de01e6938c13888a017c78500716683c2f49b01f2713a145157dfbbdc7&=&format=webp&quality=lossless&width=1421&height=800',
    'https://media.discordapp.net/attachments/1212367163361468471/1347776728931504238/13.png?ex=67cd0e64&is=67cbbce4&hm=b74abc8c3518e1b91e893b545d6d38fde26a4a5ff8004f623d535457c3f6996f&=&format=webp&quality=lossless&width=1421&height=800',
  ];

  currentBackgroundIndex = 0;
  currentBackground = this.backgroundImages[this.currentBackgroundIndex];

  constructor() {
    this.startBackgroundSlideshow();
  }

  startBackgroundSlideshow() {
    setInterval(() => {
      this.currentBackgroundIndex =
        (this.currentBackgroundIndex + 1) % this.backgroundImages.length;
      this.currentBackground =
        this.backgroundImages[this.currentBackgroundIndex];
    }, 5000); // Change background every 5 seconds
  }
}
