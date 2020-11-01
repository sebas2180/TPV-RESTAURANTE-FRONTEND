import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IncrementCount , DecrementCount ,Pages}   from '../../../stores/actions/contador.actions';
import  { pages,getCount,getCountState}  from '../../../stores/selectors/contador.select';
 

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent implements OnInit {
  countSelect$: Observable<number>;
  pages$: Observable<number>;
  pages : number = 0;
  count : number = 0;

  constructor( private store: Store) { }
  ngOnInit(): void {
    this.countSelect$ = this.store.select<number>(getCount);
    this.pages$ = this.store.select<number>(pages);
    this.pages$.subscribe(
      pagina => {
        this.pages = pagina;
      }
    )
    this.countSelect$.subscribe(
      res => { 
        this.count = res;
      }
    );
  }
  anterior():void  {
 
        if( this.count > 1){
          this.store.dispatch(new DecrementCount());
          this.pages$ = this.store.select<number>(pages);
        }
 
  }
  siguiente():void {
      if( this.count   < this.pages){
         this.store.dispatch(new IncrementCount() );
         this.pages$ = this.store.select<number>(pages);
      }
 
  }

}
