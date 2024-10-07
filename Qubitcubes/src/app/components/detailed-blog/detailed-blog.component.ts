import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Blog, ServicesService } from '../../service/services.service';
import { error } from 'console';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detailed-blog',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './detailed-blog.component.html',
  styleUrl: './detailed-blog.component.css'
})
export class DetailedBlogComponent {
  blog!: Blog;

  constructor(private route: ActivatedRoute, private service: ServicesService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getBlogById(id).subscribe(data => {
        this.blog = data;
      });
    }
    if (this.blog) {
      console.log(this.blog.title); // Access title only if blog is defined
  }
  
  }

  // ngOnInit() :void{
  //     this.id =this.route.snapshot.paramMap.get('id')
  //     this.service.getDataById(this.id).subscribe((data) => {
  //       console.log(data)
  //       this.blog =data
 
  // },(error)=>{
  //   console.log(error)
  // })
  // }

}
