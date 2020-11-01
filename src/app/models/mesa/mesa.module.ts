import { SalonModule } from '../salon/salon.module';

export interface MesaModule {

  id: number;
  comensales: number;
  salon : SalonModule;
  fecha: Date;
  numero: number;


}