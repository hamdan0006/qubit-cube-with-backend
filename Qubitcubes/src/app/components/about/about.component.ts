import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  skills = [
    { name: 'Developing Launching', percentage: 90, filledPercentage: 0 },
    { name: 'Design', percentage: 90, filledPercentage: 0 },
    { name: 'Developing and Launching', percentage: 95, filledPercentage: 0 }
  ];

  bars = [
    { label: 'Web Clean Design', percentage: 85, filledPercentage: 0 },
    { label: 'App Developing', percentage: 95, filledPercentage: 0 }
  ];

  ngOnInit(): void {
    this.animateSkills();
    this.animateBars();
  }

  animateSkills() {
    this.skills.forEach((skill, index) => {
      setTimeout(() => {
        this.fillCircle(skill);
      }, 10 * index); // Adds delay for each skill
    });
  }

  fillCircle(skill: any) {
    let currentPercentage = 0;
    const interval = setInterval(() => {
      if (currentPercentage < skill.percentage) {
        currentPercentage++;
        skill.filledPercentage = currentPercentage;
      } else {
        clearInterval(interval);
      }
    }, 10);
  }

  animateBars() {
    this.bars.forEach((bar, index) => {
      setTimeout(() => {
        this.fillBar(bar);
      }, 5 * index); // Adds delay for each bar
    });
  }

  fillBar(bar: any) {
    let currentPercentage = 0;
    const interval = setInterval(() => {
      if (currentPercentage < bar.percentage) {
        currentPercentage++;
        bar.filledPercentage = currentPercentage;
      } else {
        clearInterval(interval);
      }
    }, 5);
  }

}
