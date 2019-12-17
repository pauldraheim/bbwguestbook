import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { User } from "./user";
import { UserRole } from "./user-role";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private userUrl = "api/users";

  users: User[] = [];
  loggedIn = false;

  sessionUser: User;

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  getUsers(): void {
    console.log("fetched users");
    this.http
      .get<User[]>(this.userUrl)
      .subscribe(users => (this.users = users));
  }

  getAuthorById(id: number): string {
    this.getUsers();
    this.users.forEach(user => {
      if (user.id === id) {
        console.log("returned " + user.email);
        return user.email;
      }
    });

    return null;
  }

  login(email: string, password: string): void {
    this.users.forEach((user: User) => {
      if (user.email === email && user.password === password) {
        console.log("logged in");
        this.loggedIn = true;
        this.sessionUser = new User();
        this.sessionUser.email = user.email;
        this.sessionUser.role = user.role;
      }
    });

    if (!this.loggedIn) {
      console.log("login failed");
    }
  }

  register(email: string, password: string): void {
    const user = new User();
    user.email = email;
    user.password = password;
    user.role = UserRole.GUEST;

    this.http.post<User>(this.userUrl, user, this.httpOptions).subscribe();
    this.getUsers();
    console.log("registered");
  }

  logout(): void {
    this.loggedIn = false;
    console.log("logged out");
  }

  updateUser(user: User): void {
    this.http.put(this.userUrl, user, this.httpOptions);
  }
}
