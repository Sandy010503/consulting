import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {

  bookingdata:any; 
  adddata:any;
 
  _https:HttpClient;

  constructor(_httpsRef:HttpClient, private router:Router)
  {
    this._https=_httpsRef;
  }
  

  getConsultantDetails()
  {
    this._https.get("https://consultantwebapiazure.azurewebsites.net/api/Consultants")
    .subscribe((data)=>{  
      this.bookingdata=data;
    })
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  registerDetails(addInfo:any)
  {

    let data = JSON.stringify(addInfo.value);
    console.log(data);
    this._https.post("https://consultantwebapiazure.azurewebsites.net/api/Users",data,this.httpOptions)
    .subscribe(response => {
      console.log('added',response);
      alert("added");
    })
  }

  //Login

  redirecttologinpage(){
    this.router.navigate(['/client']);
  }
  customerId:any;
  loginDetails(loginInfo:any)
  {

    console.log(loginInfo.value);

    this._https.get("https://consultantwebapiazure.azurewebsites.net/api/Users/userName?name=" + loginInfo.value.userName)
    .subscribe((data=>{
      this.customerId=data;
      console.log(this.customerId)
    }))
    
    
    
    // console.log(loginInfo.value.userRole);
   return this._https.post("https://consultantwebapiazure.azurewebsites.net/api/Users/Login",loginInfo.value,this.httpOptions).pipe(
      tap(response => {
        // Handle success response
        console.log("Success", response);
        // alert("Login Successful");
        this.redirecttologinpage();
        //this.router.navigate(['/home']);
        // this.router.navigate(['/your-target-component']); // Replace with your target route
      }),
      catchError(error => {
        // Handle error response
        console.error("Error", error);
        alert(error.error || "Login failed. Please try again.");
        return throwError(() => new Error('test')); // Rethrow the error for further handling if needed
      })
    ).subscribe(); // Subscribe at the end to trigger the request
  }
}
