import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

import { ActivatedRoute, Router } from "@angular/router";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  public blogTitle : string;
  public blogBodyHtml : string;
  public blogDescription : string;
  public blogCategory : string;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"]

  constructor(public blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router, private toastr: ToastsManager, vcr: ViewContainerRef) { 

    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  public createBlog(): any {
    
    let blogData = {

      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory

    }// end blog data

    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(

      data => {
        console.log("Blog Created");
        console.log(data);
        this.toastr.success('Blog Posted successfully', 'Success!');
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);
        }, 2000)

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error('Some error occured', 'Error');
      }

    )

  }// end create blog method

}
