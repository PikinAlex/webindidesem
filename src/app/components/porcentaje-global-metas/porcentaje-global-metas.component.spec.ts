import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcentajeGlobalMetasComponent } from './porcentaje-global-metas.component';

describe('PorcentajeGlobalMetasComponent', () => {
  let component: PorcentajeGlobalMetasComponent;
  let fixture: ComponentFixture<PorcentajeGlobalMetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorcentajeGlobalMetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcentajeGlobalMetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
