import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { RouterLink, RouterLinkActive, Router } from '@angular/router'; // Import Router
import { ServicesService } from '../../service/services.service';
import { Contact } from './contact-model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MapComponent, RouterLink, RouterLinkActive, FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactData: Contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private contactService: ServicesService, private router: Router) {} // Inject Router

  onSubmit(contactForm: NgForm) {
    // Check if any field is empty
    if (!this.contactData.name || !this.contactData.email || !this.contactData.message) {
      alert('All fields are required. Please fill out the form completely.');
      return; // Do not submit if any field is empty
    }

    if (contactForm.valid) {
      // Submit the form if all fields are filled
      this.contactService.submitContact(this.contactData).subscribe({
        next: (response: any) => {
          console.log('Contact form submitted successfully:', response);
          contactForm.reset(); // Reset form on success
          alert('Message sent successfully!');
          this.router.navigate(['/']); // Navigate to home page
        },
        error: (error) => {
          console.error('Error submitting form:', error);
          alert("Enter the fields correctly");
        }
      });
    }
  }
  
}
