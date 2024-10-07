import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  
})
export class NavComponent {
  isStyled = false;
  isScrolledUp = false;
  isAtBottom = false;
  previousScrollPosition = 0;
  animateFireworks = true;
  // isMenuOpen = false;
  isServicesOpen = false;
  isResponsiveMenuOpen = false; // Track the state of the responsive menu
  isMenuOpen: boolean = false;
  isDropdownOpen = false;

  ngOnInit() {
    this.checkIfAtBottom();

    setTimeout(() => {
      this.animateFireworks = false;
    }, 5000);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkIfScrolledUp();
    this.checkIfAtBottom();
    this.updateNavbarClass();
    this.updateButtonClass();
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
      this.isScrolledUp = false;
    }

    this.previousScrollPosition = scrollPosition;
  }

  checkIfAtBottom() {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    this.isAtBottom = scrollPosition + viewportHeight >= documentHeight - 10;
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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isResponsiveMenuOpen = !this.isResponsiveMenuOpen; // Toggle responsive menu visibility
  }

  toggleServices() {
    this.isServicesOpen = !this.isServicesOpen;
  }

  toggleResponsiveMenu() {
    const responsiveSection = document.querySelector('.responsive-section') as HTMLElement;
    const threeLineIcon = document.querySelector('.threeline-icon-container') as HTMLElement;

    if (responsiveSection.classList.contains('show')) {
      // Remove 'show' class to hide the responsive menu
      responsiveSection.classList.remove('show');
      threeLineIcon.classList.remove('iconOut');
    } else {
      // Add 'show' class to display the responsive menu
      responsiveSection.classList.add('show');
      threeLineIcon.classList.add('iconOut');
    }

    this.isMenuOpen = !this.isMenuOpen; 
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}




