import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  message: any;
  messages:any;
  msg:any;
  constructor(private service: UserRegistrationService, private router: Router, private formBuilder: FormBuilder) { }
  submitted = false;
  form !: FormGroup;
  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
      name: ['',[Validators.required,Validators.pattern('^[a-zA-z]+([\\s][A-Z]{1})$')]],
      email: ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z]).{8,}")]]

    });

  }



  public registerNow() {

    this.submitted = true;

    if (this.form.invalid) {

      return
    }


    // this.service.exitsUser(this.form.controls.firstName.value).subscribe(data1 => {
    //   this.message = data1
      // if (data1 == "User not exists") {
        let res = this.service.registration(this.form.value);
        console.log("UserName:"+this.form.value.name);
        console.log("Email:"+this.form.controls.email.value);
        res.subscribe((data) => {
          this.messages= data
            console.log("return message:"+this.messages);
          this.router.navigate(['/userlist'])
        });
        

     // }
      // else{
      //   this. msg="This User Already Exits";
      // }
    // },
    //   error => {

    //     console.log(error.message)
    //   });
  }
}
