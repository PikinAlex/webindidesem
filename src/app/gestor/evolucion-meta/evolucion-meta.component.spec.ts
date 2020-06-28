import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucionMetaComponent } from './evolucion-meta.component';

describe('EvolucionMetaComponent', () => {
  let component: EvolucionMetaComponent;
  let fixture: ComponentFixture<EvolucionMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolucionMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucionMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
