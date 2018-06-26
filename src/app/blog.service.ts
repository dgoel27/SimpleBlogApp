import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  //declare a dummy blog variable here
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2017-10-20",
      "created": "2017-10-20",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog 1 body",
      "description": "this is blog 1 description",
      "title": "this is blog 1"
    }, {
      "blogId": "2",
      "lastModified": "2017-10-21",
      "created": "2017-10-21",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog 2 body",
      "description": "this is blog 2 description",
      "title": "this is blog 2"
    }
  ]

  public currentBlog;

  constructor() { 
    console.log("service constructor is called");
  }

  //method to return all the blogs
  public getAllBlogs():any {
    return this.allBlogs;
  }

  //method to get a particular blog
  public getSingleBlogInformation(currentBlogId): any {
    //using a for of loop here from typescript
    //https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html

    for (let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }

    console.log(this.currentBlog);
    return this.currentBlog;
  }

}
