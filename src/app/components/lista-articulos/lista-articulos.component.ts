import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticuloModule } from 'src/app/models/articulo/articulo.module';
import {  MatPaginator } from '@angular/material/Paginator';
import { ListaArticulosService } from '../../services/lista-articulos/lista-articulos.service'
import { ArticuloService } from 'src/app/services/articuloService/articulo.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatCard } from '@angular/material/card';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.scss'],
  providers:[ListaArticulosService]
})
export class ListaArticulosComponent implements OnInit {
  articulosOk : boolean = false; 
  
  constructor(private artService : ArticuloService, public ListaArticulosService : ListaArticulosService) { 
  }

  ngOnInit(): void {
    this.ListaArticulosService.setdesde(1);
    this.ListaArticulosService.setpagina(1) ;
    this.ListaArticulosService.sethasta(12);
    this.ListaArticulosService.setcantidadpagina(12);

    this.artService.getArticulos().subscribe(
      response => {
        this.ListaArticulosService.setArticulos(response);
        if(this.ListaArticulosService.gethasta() > this.ListaArticulosService.articulosLength()+1 ){
          this.ListaArticulosService.sethasta(this.ListaArticulosService.articulosLength())  ;
        }
         this.ListaArticulosService.setArticulos_filtrados(this.ListaArticulosService.spliceArticulos(this.ListaArticulosService.getdesde(),this.ListaArticulosService.gethasta())) ;
        this.articulosOk = true;
      },
      error => {
        console.log(error);
      }
    )

 
 
  }
  filter( e ) {
    console.log('====================================================')
    if (e === 1 ){
      this.ListaArticulosService.setpagina(this.ListaArticulosService.getpagina() + 1);
    } else{
      this.ListaArticulosService.setpagina(this.ListaArticulosService.getpagina() - 1);
    }

    this.ListaArticulosService.setdesde(((this.ListaArticulosService.getpagina() -1  )* this.ListaArticulosService.getcantidadpagina()) +1);
 
    if((this.ListaArticulosService.getcantidadpagina()+this.ListaArticulosService.getpagina()-2) > this.ListaArticulosService.articulosLength() ){
      console.log('if')
      this.ListaArticulosService.sethasta(this.ListaArticulosService.gethasta()+this.ListaArticulosService.articulosLength())  ;
    }else {
      if (e === 1 ){
        this.ListaArticulosService.sethasta((this.ListaArticulosService.gethasta()+this.ListaArticulosService.getcantidadpagina()));
      } else{
        this.ListaArticulosService.sethasta((this.ListaArticulosService.gethasta()-this.ListaArticulosService.getcantidadpagina()));
      }
    }
 
    this.ListaArticulosService.setArticulos_filtrados(this.ListaArticulosService.spliceArticulos(this.ListaArticulosService.getdesde(),this.ListaArticulosService.gethasta())) ;
  }




}
