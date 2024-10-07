import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from "./components/home/home.component";
import { RouterOutlet } from '@angular/router';
import { WhattsappIconComponent } from "./components/whattsapp-icon/whattsapp-icon.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CounterComponent, FooterComponent, NavComponent, HomeComponent, WhattsappIconComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  isStyled = false;
  isScrolledUp = false;
  isAtBottom = false;
  previousScrollPosition = 0; // Track previous scroll position
  animateFireworks = true; // New property to control animation state

  ngOnInit() {
    // Initial check for bottom position
    this.checkIfAtBottom();

    // Stop animation after 1 second
    setTimeout(() => {
      this.animateFireworks = false; // Stop the animation after 1 second
    }, 5000);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkIfScrolledUp();
    this.checkIfAtBottom();
    this.updateNavbarClass();
    this.updateButtonClass(); // Update button class based on scroll
  }

  openNav(): void {
    this.isStyled = !this.isStyled;
  }

  resetStyle(): void {
    this.isStyled = false;
  }

  checkIfScrolledUp() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      this.isScrolledUp = scrollPosition < this.previousScrollPosition;
    } else {
      this.isScrolledUp = false; // No need to be sticky at the top
    }

    this.previousScrollPosition = scrollPosition;
  }

  checkIfAtBottom() {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    this.isAtBottom = scrollPosition + viewportHeight >= documentHeight - 10; // Added a small offset
  }

  updateNavbarClass() {
    const navbar = document.querySelector('.navbar') as HTMLElement;

    if (this.isScrolledUp || this.isAtBottom) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }

  updateButtonClass() {
    const button = document.querySelector('.main-btn') as HTMLElement;

    if (this.isScrolledUp || this.isAtBottom) {
      button.classList.add('scrolled');
    } else {
      button.classList.remove('scrolled');
    }
  }
}
