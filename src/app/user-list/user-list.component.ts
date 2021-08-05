import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: ' app-user-list',

  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  value:any;
  users:any;
  message:any;
  result:any;
  constructor(private service:UserRegistrationService,private router:Router) { 
  }
  
  public delteUser(id:number){
    
    let resp=this.service.deleteUser(id);
    resp.subscribe((data)=>{
      this.message=data
      let respo=this.service.getAllUser();
      respo.subscribe((data)=>this.users=data);
    },
    error=>{
     console.log(error.message)
  });
  }
public  editUser(user:any){
  this.router.navigate(['/updateuser'], {state: {data: user}});
}
public newUser(){
  this.router.navigate(['/cuser']);
}
  ngOnInit() {
    let respo=this.service.getAllUser();
    respo.subscribe((data)=>{
      this.users=data;
      console.log("sefsfs"+data);
     
    });
   
  }
}
