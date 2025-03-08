import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
       AOS.init({
         // Offset from the original trigger point
   });
     }

  packages = [
    { name: 'Membership Organisations', description: 'Our membership management software provides full automation of membership renewals and payments', green: '../../assets/in1.jpg' },
    { name: 'National Associations', description: 'Our membership management software provides full automation of membership renewals and payments', green: '../../assets/city.jpg' },
    { name: 'Clubs And Groups', description: 'Our membership management software provides full automation of membership renewals and payments', green: '../../assets/city1.jpg' },
    { name: 'Membership Organisations', description: 'Our membership management software provides full automation of membership renewals and payments', green: '../../assets/city2.jpg' },
    { name: 'National Associations', description: 'Our membership management software provides full automation of membership renewals and payments', green: '../../assets/im4.jpg' },
    { name: 'Clubs And Groups', description: 'Our membership management software provides full automation of membership renewals and payments', green: '../../assets/im8.jpg' },
  ];

}
