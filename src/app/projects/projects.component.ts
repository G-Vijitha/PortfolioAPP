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
      Websitelink: 'https://ng-course-recipe-book-fab45.web.app/',
      GitHub_CodeLink: 'https://github.com/G-Vijitha/RecipeBook'
    },
    {
      title: 'Angular Portfolio App',
      technologies: 'Angular, TypeScript, HTML, CSS',
      description: [
        'Responsive Portfolio Web project',
      ],
      Websitelink: 'https://portfolio-vg.netlify.app/',
      GitHub_CodeLink: 'https://github.com/G-Vijitha/PortfolioAPP'
    },
    {
      title: 'React-Portfolio App',
      technologies: 'React, HTML,JS',
      description: [
        'Web based portfolio app',
      ],
      Websitelink: "https://vijithaportfolio.netlify.app/",
      GitHub_CodeLink: 'https://github.com/G-Vijitha/portfolio'
    },    
    {
      title: 'English to Minion language app',
      technologies: 'HTML, Javascript',
      description: [
        'Translator to convert your text from English to Minion language',
      ],
      Websitelink: 'https://minionstalktranslation.netlify.app/',
      GitHub_CodeLink: 'https://github.com/G-Vijitha/banana-speak'
    },
    {
      title: 'Fun Quiz Game about Animals',
      technologies: 'HTML, JS',
      description: [
        'Console based Quiz game',
      ],
      Websitelink: 'https://replit.com/@VijithaReddyG/Quizgame1-1?embed=1&output=1',
      GitHub_CodeLink: 'https://github.com/G-Vijitha/Quizgame1'
    },
    {
      title: 'Pharmacy Store',
      technologies: 'Java, MySQL, HTML,',
      description: [
        'Web-based order management app',
      ],
      Websitelink: '',
      GitHub_CodeLink: ''
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
