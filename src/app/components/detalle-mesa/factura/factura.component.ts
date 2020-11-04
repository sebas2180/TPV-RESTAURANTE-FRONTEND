import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, observable } from 'rxjs';
import { ItemModule } from 'src/app/models/item/item.module';
import { ItemService } from 'src/app/services/itemService/item.service';
import { getCantidadItem, getCountItem } from '../../../stores/selectors/item.selector'

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {
  @Input() numero_mesa : number;
  items: ItemModule[];
  public getCountItemSelector$  : Observable<number>;
  constructor(private itemSevice : ItemService, private store: Store) { }

  ngOnInit(): void {
    this.getCountItemSelector$ = this.store.select<number>(getCantidadItem);
   
    this.getCountItemSelector$.subscribe(
      res=> {
        this.itemSevice.findBy_nroMesa(this.numero_mesa).subscribe(
          res =>{
            console.log('buscar items')
            this.items = res;
          },
          error => {
            console.log(error)
          }
        )
      }
    )
    
      this.itemSevice.findBy_nroMesa(this.numero_mesa).subscribe(
        res =>{
          console.log('buscar items')
          this.items = res;
        },
        error => {
          console.log(error)
        }
      )
 
  }
  mostrar_factura() : void {
    
  }
}
