import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateogiraComponent } from './cateogira.component';

describe('CateogiraComponent', () => {
  let component: CateogiraComponent;
  let fixture: ComponentFixture<CateogiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateogiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateogiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
