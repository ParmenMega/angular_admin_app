import { Component } from '@angular/core';
import {emit} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation/parallel-worker";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj: Login;
   constructor(private http: HttpClient, private router : Router) {
     this.loginObj = new Login();
   }

   onLogin(){
     this.http.post<any>('http://localhost:5238/api/Login',this.loginObj).subscribe((res:any)=>{
        if (res.result == true){
          alert("welcome")
          this.router.navigateByUrl('/dashboard')
        }
        else{
          alert(res.message)
        }
     })
   }
}
export class Login{
  username: string;
  password: string;
  constructor() {
    this.password = '';
    this.username = '';
  }
}
