import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersobeject;
  users;
  changeview = false;
  modal = false;
  public imagePath;
  imgURL: any;
  public message: string;

  constructor(private myService: UsersService) { }

  ngOnInit() {
    this.myService.getUsers().subscribe(data => {
      this.usersobeject = data;
      this.users = this.usersobeject.users;
    });

  }

  Changeview() {
    this.changeview = !this.changeview;
  }

  Modal() {
    this.modal = !this.modal;
  }

  preview(files) {
    
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

}
