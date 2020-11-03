import { Component, Input, OnInit } from '@angular/core';
import { ItemModule } from 'src/app/models/item/item.module';
import { ItemService } from 'src/app/services/itemService/item.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {
  @Input() numero_mesa : number;
  items: ItemModule[];
  constructor(private itemSevice : ItemService) { }

  ngOnInit(): void {
    
    this.itemSevice.findBy_nroMesa(this.numero_mesa).subscribe(
      res =>{
        this.items = res;
        console.log(this.items)
      },
      error => {
        console.log(error)
      }
    )
  }
  mostrar_factura() : void {
    
  }
}
