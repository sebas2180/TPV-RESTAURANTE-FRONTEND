import { Component, Input, OnInit } from '@angular/core';
import { ItemModule } from 'src/app/models/item/item.module';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.scss']
})
export class ListaItemsComponent implements OnInit {

  @Input() items : ItemModule[];
  constructor() { }

  ngOnInit(): void {
  }

}
