import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { UserRole } from "../user-role";
import { PostService } from "../post.service";

@Component({
  selector: "app-guestbook",
  templateUrl: "./guestbook.component.html",
  styleUrls: ["./guestbook.component.css"]
})
export class GuestbookComponent implements OnInit {
  guest = UserRole.GUEST;
  student = UserRole.STUDENT;
  admin = UserRole.ADMIN;

  title: string;
  text: string;

  constructor(
    private userService: UserService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postService.getPosts();
  }

  sendPost() {
    this.postService.addPost(this.title, this.text);

    this.title = "";
    this.text = "";
  }
}
