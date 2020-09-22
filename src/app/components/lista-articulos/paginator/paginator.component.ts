import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Output() emitFilter   = new EventEmitter();
 
   pagina_actual : number = 1 ;
  @Input() cantidad_por_pagina : number ;
  @Input() cantidad_elementos : number ;
  pages : number = 1;

  constructor() { }

  ngOnInit(): void {
    console.log( this.cantidad_elementos +'            '+ this.cantidad_por_pagina);
    if( this.cantidad_elementos >= this.cantidad_por_pagina) {
      this.pages = Math.ceil(this.cantidad_elementos / this.cantidad_por_pagina);
    }
  }
  anterior():void  {
    if(this.pagina_actual > 1) {
      this.pagina_actual --;
      
      this.emitFilter.emit(-1);

    }
  }
  siguiente():void {
    if(this.pagina_actual < this.pages ) {
      this.pagina_actual ++;
      this.emitFilter.emit(1);
      
    }
  }

}
