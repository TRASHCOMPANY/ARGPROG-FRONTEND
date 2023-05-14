import { Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service'
import { User } from '../../models/user';
import { Observable, ObservableInput } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    public register:any 
    public buttonRegisterShow: any
   
       
    dataForm: User ={
    first_name: '',
    last_name:'',
    email:'',
    password: '',
    telephone: Number(),
    terms:'true'
     };

  constructor(private userservice: UsersService) { }

  ngOnInit(): void {
  }
  
  sendForm() {
         this.userservice.createUser (this.dataForm).subscribe(e => {console.log("usuario guardado");
        this.register = true;
        this.buttonRegisterShow = false;
      },
      error => {
        this.register = false;
      }
    );
  }
  
  
}
