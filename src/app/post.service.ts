import { Injectable } from "@angular/core";
import { Post } from "./post";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PostService {
  private postUrl = "api/posts";

  posts: Post[] = [];

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  getPosts(): void {
    console.log("fetched posts");
    this.http.get<Post[]>(this.postUrl).subscribe(posts => {
      this.posts = posts;
    });
  }

  addPost(title: string, text: string): void {
    const post = new Post();
    post.header = title;
    post.text = text;
    this.http.post<Post>(this.postUrl, post, this.httpOptions).subscribe();
    this.getPosts();
    console.log("added post");
  }
}
