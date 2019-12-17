import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { UserRole } from "../user-role";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  admin = UserRole.ADMIN;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  getRoleNameById(roleId: number): string {
    if (roleId === 0) {
      console.log("returned role name Guest");
      return "Guest";
    } else if (roleId === 1) {
      console.log("returned role name Student");
      return "Student";
    } else if (roleId === 2) {
      console.log("returned role name Admin");
      return "Admin";
    }
  }
}
