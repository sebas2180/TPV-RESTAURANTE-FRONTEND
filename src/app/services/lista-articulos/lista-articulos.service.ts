import { Injectable } from '@angular/core';
import { ArticuloModule } from 'src/app/models/articulo/articulo.module';

@Injectable({
  providedIn: 'root'
})
export class ListaArticulosService {

  private articulos : ArticuloModule[] ;
  private articulos_filtrados : ArticuloModule[] ;
  private cantidad_pagina: number ;
  private desde :number;
  private pagina: number ;
  private hasta : number ;

    public getcantidadpagina(): number {
        return this.cantidad_pagina;
    }

    public setcantidadpagina(cantidadpagina: number) {
        this.cantidad_pagina = cantidadpagina;
    }

    public getdesde(): number {
        return this.desde;
    }

    public setdesde(desde: number) {
        this.desde = desde-1;
    }

    public getpagina(): number {
        return this.pagina;
    }

    public setpagina(pagina: number) {
        this.pagina = pagina;
    }

    public gethasta(): number {
        return this.hasta;
    }

    public sethasta(hasta: number) {
        this.hasta = hasta;
    }
    public getArticulos(): ArticuloModule[] {
      return this.articulos;
  }

    public setArticulos(articulos: ArticuloModule[]): void {
      this.articulos = articulos;
    }

    public getArticulos_filtrados(): ArticuloModule[] {
      return this.articulos_filtrados;
    }

    public setArticulos_filtrados(articulos_filtrados: ArticuloModule[]): void {
      this.articulos_filtrados = articulos_filtrados;
    }
    public articulosLength(){
      return this.articulos.length;
    }
    public spliceArticulos(desde,hasta){
      return this.articulos.slice(desde,hasta);
    }


  public filtrado(articulos : ArticuloModule[]):  any {


  }


  constructor() { }
}
