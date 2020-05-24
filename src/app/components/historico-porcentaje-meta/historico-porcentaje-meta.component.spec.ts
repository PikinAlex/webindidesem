import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoPorcentajeMetaComponent } from './historico-porcentaje-meta.component';

describe('HistoricoPorcentajeMetaComponent', () => {
  let component: HistoricoPorcentajeMetaComponent;
  let fixture: ComponentFixture<HistoricoPorcentajeMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoPorcentajeMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoPorcentajeMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
