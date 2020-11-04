import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ArticuloModule } from 'src/app/models/articulo/articulo.module';
import { ItemModule } from 'src/app/models/item/item.module';
import { MesaModule } from 'src/app/models/mesa/mesa.module';
import { ItemService } from 'src/app/services/itemService/item.service';

import  Swal  from 'sweetalert2';
import { DECREMENT_ITEM,INCREMENT_ITEM} from '../../../stores/actions/items.actions';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.scss']
})
export class AgregarArticuloComponent implements OnInit {
  @Input() articulo_a_agregar : ArticuloModule;
  @Input() numero_mesa : number;
  @Output() cambiar_panel = new EventEmitter();
  form: FormGroup;
  mesa : MesaModule ;
  constructor( private itemService: ItemService, private store : Store) { }

  ngOnInit(): void {
    this.mesa = new MesaModule;
    this.mesa.numero = this.numero_mesa;
    console.log(this.mesa.numero)
    this.form = new FormGroup({
    detalle: new FormControl(''),
    comentario: new FormControl('',Validators.maxLength(200)),
    cantidad: new FormControl(0,[Validators.required,Validators.min(1)])
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
    if(this.form.valid){
 
      const item = new ItemModule(); 
 
 

      item.comentario = this.form.get('comentario').value
      item.articulo = this.articulo_a_agregar;
      item.mesa = this.mesa;
      item.cantidad = this.form.get('cantidad').value;
      
      this.itemService.add(item).subscribe(
        res => {
          this.store.dispatch(new INCREMENT_ITEM())
          if(res['status'] == 200)  {
            Swal.fire({
              icon: 'success',
              timer: 1500,
              text:  (res['message'])
              })
          }
          this.cambiar_panel.emit();
        },
        error => {
          Swal.fire({
            icon: 'error',
            timer: 1500,
            text:  (error['message'])
            })
        }
      )
    }
  }

}
