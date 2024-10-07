import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to the imports array
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'] // Corrected the typo here from 'styleUrl' to 'styleUrls'
})
export class ServicesComponent implements OnInit, OnDestroy {

  projectcount = 0;
  accuratecount = 0;
  clientcount = 0;
  customerfeedback = 0;

  private observer!: IntersectionObserver;
  private isAnimated = false;

  showSecondImage = false; // Initially hide the second image

  ngOnInit() {
    // Select the element to observe
    const elementToObserve = document.querySelector('.client-count-wrp-inner');
    
    if (elementToObserve) {
      // Create an IntersectionObserver instance
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Start animation if not already animated
            if (!this.isAnimated) {
              this.isAnimated = true;
              this.startCounter('projectcount', 200);
              this.startCounter('accuratecount', 299);
              this.startCounter('clientcount', 300);
            }
          }
        });
      });

      // Observe the selected element
      this.observer.observe(elementToObserve);
    }

    // Use setTimeout to show the second image after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      this.showSecondImage = true;
    }, 400);
  }

  startCounter(property: 'projectcount' | 'accuratecount' | 'clientcount' | 'customerfeedback', target: number) {
    const increment = () => {
      if (this[property] < target) {
        this[property]++;
        requestAnimationFrame(increment);
      } else {
        this[property] = target;
      }
    };

    increment();
  }

  ngOnDestroy() {
    // Disconnect the IntersectionObserver when the component is destroyed
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
