import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  

  goToHome() : void{
    this.router.navigate(["/home"]);
  }
}
