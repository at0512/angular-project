import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlaskserviceService {

  constructor( private http:HttpClient) { }  

  server_address = "http://127.0.0.1:5000"

  send_post_request(data:any){ 
    return this.http.post( 
    this.server_address,
    JSON.stringify(data) )
  }
}
