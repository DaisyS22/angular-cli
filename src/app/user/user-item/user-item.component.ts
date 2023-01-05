import { UserService } from './../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent {

  constructor(private userService: UserService) {
    console.log(userService.serviceName)
  }
}
