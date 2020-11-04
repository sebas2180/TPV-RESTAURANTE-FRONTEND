import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MesaModule } from 'src/app/models/mesa/mesa.module';
import { SalonModule } from 'src/app/models/salon/salon.module';
import { MesaService } from 'src/app/services/mesaService/mesa.service';

@Component({
  selector: 'app-agregar-mesa',
  templateUrl: './agregar-mesa.component.html',
  styleUrls: ['./agregar-mesa.component.scss']
})
export class AgregarMesaComponent implements OnInit {
  form: FormGroup;
  mesa: MesaModule;
  salon: SalonModule;
  salones$  =  this.store.select('salon');
  constructor( private mesaService: MesaService, private store: Store) { }

  ngOnInit(): void {
    this.salones$.subscribe(
      res=>{
        console.log(res)
      }
    );

    this.form = new FormGroup({
      numero: new FormControl('',[Validators.required,Validators.min(0)]),
      salon: new FormControl('',[Validators.required])
    })
  }

  onSubmit() {
    
    if(this.form.valid){
      this.mesa.numero= this.form.get('numero').value;
      this.mesa.salon= this.form.get('numero').value;
      this.mesaService.addMesa(this.mesa).subscribe(
        res=>{ 

        },
        error => {

        }
      )
    } else {

    }
  }
}
