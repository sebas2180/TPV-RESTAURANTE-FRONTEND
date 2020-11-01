import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss']
})
export class CardLoginComponent implements OnInit {
  form : FormGroup;
  constructor() { }

  ngOnInit(): void {

    
    this.form = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  OnSubmit(): void {

    
  }
}
