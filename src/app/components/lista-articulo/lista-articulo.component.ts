import { Component, Input, OnInit } from '@angular/core';
import { ArticuloModule } from 'src/app/models/articulo/articulo.module';
import { CategoriaModule } from 'src/app/models/categoria/categoria.module';
import { ArticuloService } from 'src/app/services/articuloService/articulo.service';

@Component({
  selector: 'app-lista-articulo',
  templateUrl: './lista-articulo.component.html',
  styleUrls: ['./lista-articulo.component.scss']
})
export class ListaArticuloComponent implements OnInit {

  @Input() id_categoria : number;
  lista_articulos: ArticuloModule[];
  articulosOk: boolean = false;
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

}
