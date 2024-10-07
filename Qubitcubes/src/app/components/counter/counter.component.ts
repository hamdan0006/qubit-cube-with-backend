
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit, OnDestroy {
  
  projectcount = 0;
  accuratecount = 0;
  clientcount = 0;
  customerfeedback = 0;

  private observer!: IntersectionObserver;
  private isAnimated = false;

  ngOnInit() {
    // Create an IntersectionObserver instance
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start animation if not already animated
          if (!this.isAnimated) {
            this.isAnimated = true;
            this.startCounter('projectcount', 318);
            this.startCounter('accuratecount', 218);
            this.startCounter('clientcount', 219);
          }
        }
      });
    });

    // Observe the component
    this.observer.observe(document.querySelector('app-counter')!);
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
