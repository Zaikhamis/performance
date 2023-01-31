import { Component } from '@angular/core';

@Component({
  selector: 'comment-sec',
  templateUrl: '../comment/comment.component.html',
  styleUrls: ['../comment/comment.component.css']
})
export class Comments {
  userComments: any = {
    id: 'fname',
    fullName: 'Full Name ',
    email: 'Email',
    phone_no: 'Phone_No. ',
    message: 'Leave a Message ',
  };
}
