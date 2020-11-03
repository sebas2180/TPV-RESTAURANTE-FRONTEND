import { Component, Input, OnInit } from '@angular/core';
import { ItemModule } from 'src/app/models/item/item.module';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item : ItemModule;
  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }

}
