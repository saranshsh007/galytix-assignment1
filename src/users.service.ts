import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getData()
  {
    let url = "https://countriesnow.space/api/v0.1/countries";
    return this.http.get(url);
  }
}
