import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Log } from '../models/log.model';
import { UserService } from './user.service';

@Component({
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {

  user: User = new User();
  logs:Log[];

  public show:boolean = false;
  public buttonName:any = 'View';


  constructor(private router: Router, private userService: UserService) {

  }

  createUser(): void {
    this.userService.createUser(this.user)
        .subscribe((logs:Log[]) => {
          this.logs=logs;
          console.log(this.logs)
          alert("User created successfully.");
        });
        this.show = !this.show;
        if(this.show)  
        this.buttonName = "Hide";
        else
        this.buttonName = "View";
  };

  genders = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];


}