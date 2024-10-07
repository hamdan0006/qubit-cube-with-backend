// import { Component,OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// import { v4 as uuid } from 'uuid';
// import { ServicesService } from '../../../service/services.service';
// import { error } from 'console';
// import { HttpClientModule } from '@angular/common/http';

// @Component({
//   selector: 'app-addpost',
//   standalone: true,
//   imports: [ReactiveFormsModule,HttpClientModule],
//   templateUrl: './addpost.component.html',
//   styleUrl: './addpost.component.css'
// })
// export class AddpostComponent {

//   constructor(private service : ServicesService){}

//   addBlog =new FormGroup({

//     id : new FormControl(uuid()),
//     "title" : new FormControl('',Validators.required),
//     "subtitle" : new FormControl('',Validators.required),
//     "content" : new FormControl('',Validators.required),
//     "author" : new FormControl('',Validators.required),

    
//   })

//   onSubmit(){

//     console.log(this.addBlog.value)
//     this.service.postData(this.addBlog.value).subscribe((data)=>{
//       console.log(data)
//     },(error)=>{
//       console.log(error)
//     })
//   }

//   ngOnInit() :void{}

// }
