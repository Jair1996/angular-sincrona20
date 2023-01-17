import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [],
})
export class HomePageComponent {
  showUserList: boolean = false;

  constructor(private userService: UserService) {}

  getUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.userService.users = users;
      this.showUserList = true;
    });
  }

  hiddenUsers() {
    this.showUserList = false;
  }
}
