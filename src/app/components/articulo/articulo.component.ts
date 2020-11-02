import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticuloModule } from 'src/app/models/articulo/articulo.module';
import { ArticuloService } from 'src/app/services/articuloService/articulo.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss'],
  providers: [ArticuloService]
})
export class ArticuloComponent implements OnInit {
    @Input() articulo : ArticuloModule ;
    @Output() agregar_articulo = new EventEmitter();

  constructor(public artService: ArticuloService) { }
  ngOnInit(): void {
     

  }
  agregar_producto( ) : void {
    let datos =[ {"codigo":2,"articulo":this.articulo}]
    this.agregar_articulo.emit(datos);
  }

}
