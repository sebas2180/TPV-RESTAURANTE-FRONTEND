import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { IncrementCount , DecrementCount}   from '../../../stores/actions/contador.actions';
import  * as contadorReducer  from '../../../stores/reducers/contador.reducer';
import  * as countSelect from '../../../stores/selectors/contador.select';
 

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent implements OnInit {
  @Output() emitFilter   = new EventEmitter();
  countSelect$: Observable<number>;

  @Input() cantidad_por_pagina : number ;
  @Input() cantidad_elementos : number ;
  pages : number = 1;

  constructor( private store: Store) { }
  ngOnInit(): void {
    // this.count$ = this.store.pipe(select('count')) ;
    this.countSelect$ = this.store.select<number>(countSelect.getCount);

    if( this.cantidad_elementos >= this.cantidad_por_pagina) {
      this.pages = Math.ceil(this.cantidad_elementos / this.cantidad_por_pagina);
    }
  }
  anterior():void  {
    this.countSelect$.subscribe(
      res => { 
        if( res > 1){
          this.store.dispatch(new DecrementCount());
          this.emitFilter.emit(-1);
        }
      }
      
    ).unsubscribe();
 
  }
  siguiente():void {
    this.countSelect$.subscribe(
      res => { 
        if( res   < this.pages){

           this.store.dispatch(new IncrementCount() );
        this.emitFilter.emit(1);
        }
      }
    ).unsubscribe();
  }

}
