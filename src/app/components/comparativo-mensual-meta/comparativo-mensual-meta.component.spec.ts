import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativoMensualMetaComponent } from './comparativo-mensual-meta.component';

describe('ComparativoMensualMetaComponent', () => {
  let component: ComparativoMensualMetaComponent;
  let fixture: ComponentFixture<ComparativoMensualMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparativoMensualMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativoMensualMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
