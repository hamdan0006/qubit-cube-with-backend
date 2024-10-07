import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  http = inject(HttpClient);

  constructor() { }

  // Method to get categories from the backend
  getCategories() {
    return this.http.get("http://localhost:3000/blog");
  }
}
