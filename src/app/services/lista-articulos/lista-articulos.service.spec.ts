import { TestBed } from '@angular/core/testing';

import { ListaArticulosService } from './lista-articulos.service';

describe('ListaArticulosService', () => {
  let service: ListaArticulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaArticulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
