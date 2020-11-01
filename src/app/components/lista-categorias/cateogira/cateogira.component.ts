import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  CategoriaModule } from 'src/app/models/categoria/categoria.module';
import { CategoriaService } from 'src/app/services/categoriaService/categoria.service';
@Component({
  selector: 'app-categoria',
  templateUrl: './cateogira.component.html',
  styleUrls: ['./cateogira.component.scss']
})
export class CateogiraComponent implements OnInit {
  
  constructor(private categoriaService : CategoriaService) { }
  @Input() categoria : CategoriaModule;
  @Output() categoria_seleccionada  = new EventEmitter();
  ngOnInit(): void {

  }

  buscar_categoria() : void {
    console.log(this.categoria.id)
    this.categoria_seleccionada.emit(this.categoria.id);
  }
}
