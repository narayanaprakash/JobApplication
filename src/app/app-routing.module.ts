import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{CreateUserComponent} from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { LoginUserComponent } from './login-user/login-user.component';

const routes: Routes = [
  {path:"",component: LoginUserComponent},
  {path:"userlist",component: UserListComponent},
  {path:"cuser",component:CreateUserComponent},
  {path:"updateuser",component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
