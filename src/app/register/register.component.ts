import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  repeatPassword: string;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  register(): void {
    if (this.password === this.repeatPassword) {
      console.log("passwords match");
      this.userService.register(this.email, this.password);
    } else {
      console.log("passwords dont match");
    }
  }
}
