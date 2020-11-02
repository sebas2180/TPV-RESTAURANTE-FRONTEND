import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticuloModule } from 'src/app/models/articulo/articulo.module';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.scss']
})
export class AgregarArticuloComponent implements OnInit {
  @Input() articulo_a_agregar : ArticuloModule;
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    console.log(this.articulo_a_agregar.id);

    this.form = new FormGroup({
      detalle: new FormControl(''),
      cantidad: new FormControl(0,Validators.required)
    })
  }
  cambiar_cantidad(e) {
    if(e === -1 ) {
      if(this.form.get('cantidad').value > 0) {
        this.form.patchValue({cantidad: this.form.get('cantidad').value + e });
      }
    } else{
      this.form.patchValue({cantidad: this.form.get('cantidad').value + e });
    }
    
  }
  OnSubmit() : void {
    alert('ok')
  }

}
