import { Component, OnInit } from '@angular/core';

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
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

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
        date: '20 Jan 2025'
      }
    },
    {
      category: 'Business',
      title: 'Equity Vaccines Ltd',
      description: 'TED Talks are known for being informative, engaging, and inspiring. If you\'re...',
      image: '../../assets/bus1.jpg',
      author: {
        name: 'Kathryn Murphy',
        avatar: '../../assets/in1.jpg',
        date: '20 Jan 2025'
      }
    },
    {
      category: 'Business',
      title: 'Equity Clinics&Diagnostic Centre Ltd',
      description: 'Description: Keynote speeches are the highlight of any event. Here are some...',
      image: '../../assets/bus2.jpg',
      author: {
        name: 'Annette Black',
        avatar: '../../assets/in1.jpg',
        date: '20 Jan 2025'
      }
    },
    {
      category: 'Business',
      title: 'Equity Mining(Malawi)',
      description: 'Description: Keynote speeches are the highlight of any event. Here are some...',
      image: '../../assets/bus3.jpg',
      author: {
        name: 'Annette Black',
        avatar: '../../assets/in1.jpg',
        date: '20 Jan 2025'
      }
    },
    {
      category: 'Business',
      title: 'Equity Pharmaceuticals Limited',
      description: 'Description: Keynote speeches are the highlight of any event. Here are some...',
      image: '../../assets/bus4.jpg',
      author: {
        name: 'Annette Black',
        avatar: '../../assets/in1.jpg',
        date: '20 Jan 2025'
      }
    },
    {
      category: 'Business',
      title: 'Tingo Express Limited',
      description: 'Description: Keynote speeches are the highlight of any event. Here are some...',
      image: '../../assets/bus5.jpg',
      author: {
        name: 'Annette Black',
        avatar: '../../assets/in1.jpg',
        date: '20 Jan 2025'
      }
    },
    {
      category: 'Business',
      title: 'Tingo Media&Technology Limited (Tingo AI)',
      description: 'Description: Keynote speeches are the highlight of any event. Here are some...',
      image: '../../assets/bus6.jpg',
      author: {
        name: 'Annette Black',
        avatar: '../../assets/in1.jpg',
        date: '20 Jan 2025'
      }
    },
    {
      category: 'Business',
      title: 'Tingo Properties PLC',
      description: 'Description: Keynote speeches are the highlight of any event. Here are some...',
      image: '../../assets/bus1.jpg',
      author: {
        name: 'Annette Black',
        avatar: '../../assets/in1.jpg',
        date: '20 Jan 2025'
      }
    },
    {
      category: 'Business',
      title: '1472 FC',
      description: 'Description: Keynote speeches are the highlight of any event. Here are some...',
      image: '../../assets/bus1.jpg',
      author: {
        name: 'Annette Black',
        avatar: '../../assets/in1.jpg',
        date: '20 Jan 2025'
      }
    }
  ];

}
