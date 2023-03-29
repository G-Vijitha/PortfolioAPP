import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Recipe Book',
      technologies: 'Angular, Firebase',
      description: [
        'Created a web responsive Recipe Book app.',
      ],
    },
    {
      title: 'Angular Portfolio App',
      technologies: 'Angular, TypeScript, HTML, CSS',
      description: [
        'Responsive Portfolio Web project',
      ],
    },
    {
      title: 'Pharmacy Store',
      technologies: 'Java, MySQL, HTML,',
      description: [
        'Web-based order management app',
      ],
    },
    {
      title: 'English to Minion language app',
      technologies: 'HTML, Javascript',
      description: [
        'Translator to convert your text from English to Minion language',
      ],
    },
    {
      title: 'Fun Quiz Game about Animals',
      technologies: 'HTML, JS',
      description: [
        'Console based Quiz game',
      ],
    },
    {
      title: 'React-Portfolio App',
      technologies: 'React, HTML,JS',
      description: [
        'Web based portfolio app',
      ],
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
