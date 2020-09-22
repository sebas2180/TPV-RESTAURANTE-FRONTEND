import { Component, Input, OnInit } from '@angular/core';
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

  constructor(public artService: ArticuloService) { }
  ngOnInit(): void {
     

  }

}
