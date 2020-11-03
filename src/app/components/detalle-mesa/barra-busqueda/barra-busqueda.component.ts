import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.scss']
})
export class BarraBusquedaComponent implements OnInit {

  constructor() {
    this.form = new FormGroup({
      busqueda: new FormControl('',[Validators.required])
    })
  }
  form : FormGroup;
  ngOnInit(): void {

  }

  OnSubmit() : void {
    
  }
}
