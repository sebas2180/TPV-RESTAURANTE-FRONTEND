import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticuloModule } from 'src/app/models/articulo/articulo.module';
import { CategoriaModule } from 'src/app/models/categoria/categoria.module';
import { ArticuloService } from 'src/app/services/articuloService/articulo.service';

@Component({
  selector: 'app-lista-articulo',
  templateUrl: './lista-articulo.component.html',
  styleUrls: ['./lista-articulo.component.scss']
})
export class ListaArticuloComponent implements OnInit {
  @Input() numero_mesa: number;
  @Input() id_categoria : number;
  @Output() volver_emit = new EventEmitter();
  lista_articulos: ArticuloModule[];
  articulo_a_agregar : ArticuloModule;
  articulosOk: boolean = false;
  panel_articulo : number = 1;
  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
    console.log(this.id_categoria);

    this.articuloService.getArticulosForIdCategoria(this.id_categoria).subscribe(
      res => {
        this.lista_articulos = res;
        console.log(this.lista_articulos)
        this.articulosOk = true;
      }
    )
  }
  cambiar_panel(e) {
    this.articulo_a_agregar = e[0]['articulo'];
    console.log(e[0]['codigo'] )
    this.panel_articulo =e[0]['codigo'];
  }

  volver() : void {
    this.volver_emit.emit(1);
  }
}
