import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Software Development Engineer',
      company: 'NTT DATA',
      duration: 'Aug 2021 - Now',
      description: [
        'Full Stack Developer.',
        // 'Working to develop new technologies to make life easier.',
      ],
    },    
  ];
  constructor() {}

  ngOnInit(): void {}
}
