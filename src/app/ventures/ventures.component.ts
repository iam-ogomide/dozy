import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Article {
  category: string;
  title: string;
  description: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    date: string;
  };
}

@Component({
  selector: 'app-ventures',
  templateUrl: './ventures.component.html',
  styleUrls: ['./ventures.component.css']
})
export class VenturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  articles: Article[] = [
    {
      category: 'Marketing',
      title: 'Tingo BV PLC',
      description: 'How do you create compelling presentations that wow your colleagues and impress...',
      image: '../../assets/in1.jpg',
      author: {
        name: 'Leslie Alexander',
        avatar: '../../assets/in1.jpg',
        date: '20 Jan 2022'
      }
    },
    {
      category: 'Business',
      title: 'Equity Vaccines Ltd',
      description: 'TED Talks are known for being informative, engaging, and inspiring. If you\'re...',
      image: '../../assets/bus1.jpg',
      author: {
        name: 'Kathryn Murphy',
        avatar: 'assets/images/kathryn-murphy.jpg',
        date: '20 Jan 2022'
      }
    },
    {
      category: 'Business',
      title: 'Equity Clinics&Diagnostic Centre Ltd',
      description: 'Description: Keynote speeches are the highlight of any event. Here are some...',
      image: '../../assets/bus2.jpg',
      author: {
        name: 'Annette Black',
        avatar: 'assets/images/annette-black.jpg',
        date: '20 Jan 2022'
      }
    },
    {
      category: 'Business',
      title: 'Equity Mining(Malawi)',
      description: 'Description: Keynote speeches are the highlight of any event. Here are some...',
      image: '../../assets/bus3.jpg',
      author: {
        name: 'Annette Black',
        avatar: 'assets/images/annette-black.jpg',
        date: '20 Jan 2022'
      }
    },
    {
      category: 'Business',
      title: 'Equity Pharmaceuticals Limited',
      description: 'Description: Keynote speeches are the highlight of any event. Here are some...',
      image: '../../assets/bus4.jpg',
      author: {
        name: 'Annette Black',
        avatar: 'assets/images/annette-black.jpg',
        date: '20 Jan 2022'
      }
    },
    {
      category: 'Business',
      title: 'Tingo Express Limited',
      description: 'Description: Keynote speeches are the highlight of any event. Here are some...',
      image: '../../assets/bus5.jpg',
      author: {
        name: 'Annette Black',
        avatar: 'assets/images/annette-black.jpg',
        date: '20 Jan 2022'
      }
    },
    {
      category: 'Business',
      title: 'Tingo Media&Technology Limited (Tingo AI)',
      description: 'Description: Keynote speeches are the highlight of any event. Here are some...',
      image: '../../assets/bus6.jpg',
      author: {
        name: 'Annette Black',
        avatar: 'assets/images/annette-black.jpg',
        date: '20 Jan 2022'
      }
    },
    {
      category: 'Business',
      title: 'Tingo Properties PLC',
      description: 'Description: Keynote speeches are the highlight of any event. Here are some...',
      image: '../../assets/bus1.jpg',
      author: {
        name: 'Annette Black',
        avatar: 'assets/images/annette-black.jpg',
        date: '20 Jan 2022'
      }
    },
    {
      category: 'Business',
      title: '1472 FC',
      description: 'Description: Keynote speeches are the highlight of any event. Here are some...',
      image: '../../assets/bus1.jpg',
      author: {
        name: 'Annette Black',
        avatar: 'assets/images/annette-black.jpg',
        date: '20 Jan 2022'
      }
    }
  ];

  //video
  @ViewChild('backgroundVideo') video: ElementRef<HTMLVideoElement> | undefined;
  isPlaying = false;

  playVideo() {
    this.video?.nativeElement.play();
    this.isPlaying = true;
  }

  pauseVideo() {
    this.video?.nativeElement.pause();
    this.isPlaying = false;
  }

}
