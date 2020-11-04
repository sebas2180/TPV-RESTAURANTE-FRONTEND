import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemModule } from 'src/app/models/item/item.module';
import { INCREMENT_ITEM } from 'src/app/stores/actions/items.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item : ItemModule;
  constructor(private store: Store) { }

  ngOnInit(): void {
    //this.store.dispatch(new INCREMENT_ITEM());
  }

}
