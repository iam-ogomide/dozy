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
      title: '5 Ways to Overcome Your Fear of Public Speaking',
      description: 'How do you create compelling presentations that wow your colleagues and impress...',
      image: 'assets/images/marketing-speaker.jpg',
      author: {
        name: 'Leslie Alexander',
        avatar: 'assets/images/leslie-alexander.jpg',
        date: '20 Jan 2022'
      }
    },
    {
      category: 'Business',
      title: 'How to Give a Great TED Talk',
      description: 'TED Talks are known for being informative, engaging, and inspiring. If you\'re...',
      image: 'assets/images/business-speaker.jpg',
      author: {
        name: 'Kathryn Murphy',
        avatar: 'assets/images/kathryn-murphy.jpg',
        date: '20 Jan 2022'
      }
    },
    {
      category: 'Education',
      title: 'How to Give a Great Graduation Speech',
      description: 'Description: Keynote speeches are the highlight of any event. Here are some...',
      image: 'assets/images/education-speaker.jpg',
      author: {
        name: 'Annette Black',
        avatar: 'assets/images/annette-black.jpg',
        date: '20 Jan 2022'
      }
    }
  ];

}
