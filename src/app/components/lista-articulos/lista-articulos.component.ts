import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {getArticulos} from '../../stores/selectors/articulos.selector';
import { ListaArticulosService } from '../../services/lista-articulos/lista-articulos.service'
import { ArticuloService } from 'src/app/services/articuloService/articulo.service';
import {   Observable } from 'rxjs';
import { interval , forkJoin } from 'rxjs';
import { ArticuloModule } from 'src/app/models/articulo/articulo.module';
import { Store} from '@ngrx/store';
import  {getCount, pages} from '../../stores/selectors/contador.select';
import { Pages}   from '../../stores/actions/contador.actions';
import { GET_ARTICULOS } from 'src/app/stores/actions/articulo.actions';
 
@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.scss'],
  providers:[ListaArticulosService]
})
export class ListaArticulosComponent implements OnInit {
  constructor(private artService : ArticuloService, public ListaArticulosService : ListaArticulosService,private store: Store) { 
  }

  articulosOk : boolean = false; 
  public articulos$ : Observable<ArticuloModule[]> = this.store.select<ArticuloModule[]>(getArticulos);
  public countSelect$: Observable<number>;
  pages$: Observable<number>;
  
  ngOnInit(): void {
    this.store.dispatch(new GET_ARTICULOS);
    this.countSelect$  = this.store.select<number>(getCount);
    this.pages$ = this.store.select<number>(pages);
    this.ListaArticulosService.setdesde(1);
    this.ListaArticulosService.setpagina(0) ;
    this.ListaArticulosService.sethasta(11);
    this.ListaArticulosService.setcantidadpagina(12);
   

    this.articulos$.subscribe(
      articulos =>{
       console.log(articulos)
        this.ListaArticulosService.setArticulos(articulos);
        this.store.dispatch(new Pages(Math.ceil(articulos.length / this.ListaArticulosService.getcantidadpagina())))
        this.ListaArticulosService.setArticulos_filtrados(this.ListaArticulosService.spliceArticulos(this.ListaArticulosService.getdesde(),this.ListaArticulosService.gethasta())) ;
      }
    )
      this.countSelect$.subscribe(
        count=>{
          this.ListaArticulosService.getArticulos();
              this.ListaArticulosService.setpagina( count );
              this.ListaArticulosService.setdesde( (this.ListaArticulosService.getpagina()-1 )  *( this.ListaArticulosService.getcantidadpagina()));
              if((this.ListaArticulosService.getcantidadpagina()+this.ListaArticulosService.getpagina()-1) > this.ListaArticulosService.articulosLength() ){
                this.ListaArticulosService.sethasta(this.ListaArticulosService.gethasta()+this.ListaArticulosService.articulosLength()-1 )  ;
              }else {
                  this.ListaArticulosService.sethasta((this.ListaArticulosService.getpagina() * (this.ListaArticulosService.getcantidadpagina())));
              }
            this.ListaArticulosService.setArticulos_filtrados(this.ListaArticulosService.spliceArticulos(this.ListaArticulosService.getdesde(),this.ListaArticulosService.gethasta())) ;
          this.articulosOk = true;
          
          }
  
      )
 
 

  }





}
