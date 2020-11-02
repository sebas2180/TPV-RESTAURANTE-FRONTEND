import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-catalogo',
  templateUrl: './panel-catalogo.component.html',
  styleUrls: ['./panel-catalogo.component.scss']
})
export class PanelCatalogoComponent implements OnInit {
  panel : number = 1;
  id_categoria_seleccionada : number;
  constructor() { }

  ngOnInit(): void {
  }
  mostrar_categoria(e) {
    console.log(this.id_categoria_seleccionada)
    this.id_categoria_seleccionada = e;
    this.panel = 2;
    

  }
}
