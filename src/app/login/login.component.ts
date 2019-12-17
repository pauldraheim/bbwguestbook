import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  login(): void {
    this.userService.login(this.email, this.password);
  }
}
