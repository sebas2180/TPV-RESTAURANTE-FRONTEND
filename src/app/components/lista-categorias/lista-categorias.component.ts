import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoriaModule } from 'src/app/models/categoria/categoria.module';
import { CategoriaService } from 'src/app/services/categoriaService/categoria.service';
import { GET_CATEGORIAS } from 'src/app/stores/actions/categorias.actions';
import { getCategoria} from '../../stores/selectors/categorias.selector';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.scss']
})
export class ListaCategoriasComponent implements OnInit {
  lista_categorias : CategoriaModule[];
  @Output() categoria_seleccionada  = new EventEmitter();
  constructor(private store: Store,private categoriaService: CategoriaService) { }
 
  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      res =>{
        console.log(res)
       this.lista_categorias  = res ;
      },
      error => {
        console.log( error );
      }
    )
  }
  mostrar_categoria(e){
    this.categoria_seleccionada.emit(e);
  }
}
