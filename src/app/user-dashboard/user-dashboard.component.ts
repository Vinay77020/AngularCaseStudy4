import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  isLoading: boolean;
  
  message: any;
  error: string;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.isLoading = true; 
     this.auth.onRegister(form.value).subscribe((res) => {
       this.isLoading = false;
       this.message = res.message;
       form.reset();
     },err => {
       this.isLoading = false;     
       this.error = "Something went wrong"
     })
    }
}
