import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCatalogoComponent } from './panel-catalogo.component';

describe('PanelCatalogoComponent', () => {
  let component: PanelCatalogoComponent;
  let fixture: ComponentFixture<PanelCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
