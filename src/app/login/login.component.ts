import { Component, OnInit } from '@angular/core'; 
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { FormBuilder} from '@angular/forms';
import { FlaskserviceService } from '../flaskservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {  
  confirm:string = ''; 
  username:string = 'test@testmail.com' 
  password:string = 'test123'  
 angForm : FormGroup;
  constructor(private router:Router,
   private fb : FormBuilder, 
   private auth:FlaskserviceService) {  
    this.angForm = this.fb.group({ 
      name:['',Validators.required], 
      pass:['', Validators.required]

    })
   }
  
 

  Submit(mail:any, word:any){   
    if(this.username==mail && this.password==word){ 
     this.router.navigate(['home']) 
    } 
    else{ 
      this.confirm='error' 
      console.log(mail, word)
    }

  } 

}
