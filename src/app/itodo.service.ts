import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ITodoService {

  constructor(private _HttpClient:HttpClient) { }

 gettodo():Observable<any>{
  return this._HttpClient.get('https://jsonplaceholder.typicode.com/todos')
 }

}
 