import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, React',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Java',
      level: 'Proficient',
      rating: 80,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'SQL',
      level: 'Proficient',
      rating: 70,
    },
    {
      name: 'C,C++',
      level: 'Proficient',
      rating: 70,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
