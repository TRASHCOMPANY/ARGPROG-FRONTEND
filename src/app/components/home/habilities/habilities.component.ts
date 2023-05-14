import { Component } from '@angular/core';
import {UsersService} from '../../../services/users.service'
@Component({
  selector: 'app-habilities',
  templateUrl: './habilities.component.html',
  styleUrls: ['./habilities.component.css']
})
export class HabilitiesComponent {
  public skillPorcent:number = 0
   
  skills: any;
  
    constructor(private userService:UsersService) { }
  
    ngOnInit(): void {
      
      this.userService.getAllSkills().subscribe(data => {this.skills = data, console.log(data)});
    
    }
  
}
