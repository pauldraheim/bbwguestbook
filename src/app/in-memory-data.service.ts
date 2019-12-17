import { InMemoryDbService } from "angular-in-memory-web-api";
import { Injectable } from "@angular/core";
import { User } from "./user";
import { UserRole } from "./user-role";
import { Post } from "./post";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 1,
        email: "guest@gmail.com",
        password: "123",
        role: UserRole.GUEST
      },
      {
        id: 2,
        email: "student@gmail.com",
        password: "123",
        role: UserRole.STUDENT
      },
      { id: 3, email: "admin@gmail.com", password: "123", role: UserRole.ADMIN }
    ];
    const posts = [
      {
        id: 1,
        header: "The first post!",
        text: "This is the first post in the guestbook",
        authorId: 3
      },
      {
        id: 2,
        header: "Hello everyone!",
        text: "I just got verified as student and can now post.",
        authorId: 2
      }
    ];
    console.log("created database");
    return { users, posts };
  }

  genUserId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }

  genPostId(posts: Post[]): number {
    return posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 11;
  }
}
