import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MesaModule } from 'src/app/models/mesa/mesa.module';

@Component({
  selector: 'mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})
export class MesaComponent implements OnInit {

  @Input() mesa : MesaModule;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  mostrarMesa(){
    this.router.navigate(['/detalle-mesa', this.mesa.numero]);
  }
}
