import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


interface NewsItem {
  title: string;
  date: string;
  image: string;
  type?: 'video' | 'article';
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  ngOnInit(): void {
    AOS.init({
      // Offset from the original trigger point
});
  }

  newsItems: NewsItem[] = [
    {
      title: 'Tony O. Elumelu Meets with President Brice Oligui Nguema of Gabon',
      date: 'March 3, 2025',
      image: 'assets/images/gabon-meeting.jpg',
      type: 'video'
    },
    {
      title: 'My Keynote Address at the Cameroon Economic Meeting',
      date: 'February 27, 2025',
      image: 'assets/images/keynote-address.jpg'
    },
    {
      title: 'Heirs Energies Leadership Forum 2025: Public and Private Sector Leaders Unite to Drive Nigeria\'s Oil Production Growth',
      date: 'February 24, 2025',
      image: 'assets/images/leadership-forum.jpg'
    },
    {
      title: 'From Dubai to Ethiopia: Forging Partnership, Promoting Peace',
      date: 'February 17, 2025',
      image: 'assets/images/dubai-ethiopia.jpg'
    },
    {
      title: 'Tony Elumelu Foundation Partners with UAE Office of Development Affairs, Khalifa Bin Zayed Al Nahyan Foundation to Empower Additional 1000 Young African Entrepreneurs',
      date: 'February 12, 2025',
      image: 'assets/images/uae-partnership.jpg'
    }
  ];

  packages = [
    { name: 'Membership Organisations', description: 'Our membership management software provides full automation of membership renewals and payments', green: '../../assets/in1.jpg' },
    { name: 'National Associations', description: 'Our membership management software provides full automation of membership renewals and payments', green: '../../assets/city.jpg' },
    { name: 'Clubs And Groups', description: 'Our membership management software provides full automation of membership renewals and payments', green: '../../assets/city1.jpg' },
    { name: 'Membership Organisations', description: 'Our membership management software provides full automation of membership renewals and payments', green: '../../assets/city2.jpg' },
    { name: 'National Associations', description: 'Our membership management software provides full automation of membership renewals and payments', green: '../../assets/im4.jpg' },
    { name: 'Clubs And Groups', description: 'Our membership management software provides full automation of membership renewals and payments', green: '../../assets/im8.jpg' },
  ];

  currentIndex = 0;
  videos: SafeResourceUrl[];

  constructor(private sanitizer: DomSanitizer) {
    this.videos = [
      this.sanitizeUrl('https://www.youtube.com/embed/6UgU6DxoKok'),
      this.sanitizeUrl('https://www.youtube.com/embed/Imk9ZUcdJcY')
    ];
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  moveSlide(direction: number) {
    const totalSlides = this.videos.length;
    this.currentIndex = (this.currentIndex + direction + totalSlides) % totalSlides;
  }

}
