import { Component, OnInit } from '@angular/core';
import { FlaskserviceService } from '../flaskservice.service';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent {

  constructor(private root: FlaskserviceService) { }  
  name:string = '' 
  file:any; 
  getname(data:any){ 
     this.name = data
  }
  
  getfile(data:any){
  this.file = data.target.files[0] 
  console.log('file',this.file)
  } 
  submitData(){  
    let formData = new FormData() 
     formData.append('file', this.file,this.file.name)
    this.root.send_post_request(formData).subscribe()
  }
}
