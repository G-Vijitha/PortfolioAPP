import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'Siddharth Institute of Engineering and Technology',
      course: 'BTech in Computer Science and Information Technology',
      duration: '2017-2021',
      score: '80%',
    },
    {
      institute: 'Sri Chaitanya Junior College',
      course: 'HSC',
      duration: '2015-2017',
      score: '93%',
    },
    {
      institute: 'Sri Venkateswara Childerens High School',
      course: 'SSC',
      duration: '2014-2015',
      score: '87%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
