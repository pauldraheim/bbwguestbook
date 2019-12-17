import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ["email", "role"];

  constructor(private userService: UserService) {}

  ngOnInit() {}

  updateUser($event: User) {
    this.userService.updateUser($event);
  }
}
