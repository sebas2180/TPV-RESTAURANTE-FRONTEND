import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/itemService/item.service';

@Component({
  selector: 'app-detalle-mesa',
  templateUrl: './detalle-mesa.component.html',
  styleUrls: ['./detalle-mesa.component.scss']
})
export class DetalleMesaComponent implements OnInit {
  numero_mesa : number;
  constructor(private _route: ActivatedRoute,private itemService: ItemService) { 
    this.numero_mesa = +this._route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

    //this.itemService.findBy_nroMesa(id)

  }
}
