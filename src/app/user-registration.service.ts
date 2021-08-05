import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }
  public login(user: any) {
    return this.http.post("http://localhost:8080/authenticate", user, { responseType: 'text' as 'json' });
  }
  public registration(users: any) {
    let tokenstr=localStorage.getItem('token');
    var headers_object = new HttpHeaders();
        headers_object.append('Content-Type', 'application/json');
        headers_object.append("Authorization", "Bearer " + tokenstr);

        const httpOptions = {
          "Authorization": "Bearer " + tokenstr
        };
    // const headers=new HttpHeaders().set('Authorization',tokenstr);
   // console.log("tokendata:"+headers);;
    return this.http.post("http://localhost:8080/api/user/", users, {headers:httpOptions, responseType: 'text' as 'json' });
  }
  public updateUser(user: any) {
    let tokenstr=localStorage.getItem('token');
    const httpOptions = {
      "Authorization": "Bearer " + tokenstr
    };
    return this.http.put("http://localhost:8080/api/user/", user, { headers:httpOptions,responseType: 'text' as 'json' });
  }
  public getAllUser() {
    let tokenstr=localStorage.getItem('token');
    const httpOptions = {
      "Authorization": "Bearer " + tokenstr
    };
    return this.http.get("http://localhost:8080/api/user/",{headers:httpOptions});
  }
  public deleteUser(id: number) {
    console.log("eeeeeeeeeeeeeeeeeeee"+id);
    let tokenstr=localStorage.getItem('token');
    const httpOptions = {
      "Authorization": "Bearer " + tokenstr
    };
    return this.http.delete("http://localhost:8080/api/user?id="+id,{ headers:httpOptions,responseType: 'text' as 'json' });
  }

}
