import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  user:User=new User(0," ","","","");

  message:any;
  constructor(private service:UserRegistrationService,private router:Router) { 
   
    let data=this.router.getCurrentNavigation()?.extras?.state?.data
   
    this.user=new User(data.id,data.name,data.email,data.password,data.phone)
  }

  ngOnInit(): void {
            
  }
  registerUpdateNow(){
    let res=this.service.updateUser(this.user);
    res.subscribe((data)=>{
      this.message=data
    this.router.navigate(['/userlist'])
    });
  }
}
