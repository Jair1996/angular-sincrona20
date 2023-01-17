import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly url = 'https://jsonplaceholder.typicode.com/users';

  users: User[] = [];

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      map((user) => {
        return user.map((u, i) => ({
          ...u,
          img: `https://xsgames.co/randomusers/assets/avatars/male/${i}.jpg`,
        }));
      })
    );
  }
}
