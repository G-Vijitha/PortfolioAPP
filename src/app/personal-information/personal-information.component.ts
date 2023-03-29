import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Vijitha Gorentla'],
    ['DOB', '18/01/2000'],
    ['Work Exp', '2 Years'],
    ['Education', 'B.Tech (2021)'],
    ['Interests', 'Photography'],
  ];

  aboutMe: string[] = [
    'Skilled and detail-oriented software developer with good experience in developing scalable & maintainable software applications with strong background in Java, Angular and MySQL.I am adept at adapting to new challenges & technologies as needed and passionate about staying up to date with emerging trends and can work collaboratively in a team environment and contribute to all phases of the software development life cycle.',
    // 'Working as a Full Stack Developer.',
    // 'Delivered all product withing deadlines. Always eager to learn new technologies.',
    // 'Currently, working as CEO of Google Alphabet',
  ];

  constructor() {}

  ngOnInit(): void {}
}
