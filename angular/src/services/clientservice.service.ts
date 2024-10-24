import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {

  bookingdata:any; 
  adddata:any;
 
  _https:HttpClient;

  constructor(_httpsRef:HttpClient)
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
}
