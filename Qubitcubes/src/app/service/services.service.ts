import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../components/contact/contact-model'; 



export interface Blog {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  content: string;
  author: string;
  image: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl = 'http://localhost:3000/blogs'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  // Get all blogs
  getAllBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.baseUrl);
  }

  // Get blog by ID
  getBlogById(id: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.baseUrl}/${id}`);
  }

  private contactUrl = 'http://localhost:3000/contact'; // Backend endpoint

  

 
  submitContact(contactData: Contact): Observable<any> {
    return this.http.post(this.contactUrl, contactData);
  }
}
