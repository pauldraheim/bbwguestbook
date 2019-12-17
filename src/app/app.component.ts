import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";
import { User } from "./user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers();
  }

  title = "bbwguestbook";
}
