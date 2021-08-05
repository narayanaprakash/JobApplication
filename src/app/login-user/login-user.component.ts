import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
  public loginInvalid!: boolean;
  private formSubmitAttempt!: boolean;
  private returnUrl!: string;
  messages:any;
  msg:any;
  constructor(
    private fb: FormBuilder,
    private route:Router,
    public dialog: MatDialog,
    private service:UserRegistrationService
    ) {
      
    }
    submitted = false;
    form!: FormGroup;

   ngOnInit() {
   
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
   }
   onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    this.submitted = true;
    if(this.form.invalid) {
      return
    }
    let res = this.service.login(this.form.value);
    res.subscribe((data) => {
      this.messages=data;
      console.log("token:"+this.messages);
        localStorage.setItem('token', this.messages);
        this.route.navigate(['/cuser']);
    });
   
    
  }

}

