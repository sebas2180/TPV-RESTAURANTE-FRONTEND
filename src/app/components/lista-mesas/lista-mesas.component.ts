import { Component, OnInit } from '@angular/core';
import { MesaService } from 'src/app/services/mesaService/mesa.service';
import {  MesaModule} from '../../models/mesa/mesa.module'
@Component({
  selector: 'app-lista-mesas',
  templateUrl: './lista-mesas.component.html',
  styleUrls: ['./lista-mesas.component.scss']
})
export class ListaMesasComponent implements OnInit {
    mesas : MesaModule[];
    panel : number = 1;
  constructor(private mesaService: MesaService) { }

  ngOnInit(): void {

    this.mesaService.getMesas().subscribe(
      res =>{
        this.mesas = res;
        console.log(this.mesas);
      },err =>{
        console.log(err)
      }
    )
  }

}
