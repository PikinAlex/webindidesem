import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasPendientesComponent } from './metas-pendientes.component';

describe('MetasPendientesComponent', () => {
  let component: MetasPendientesComponent;
  let fixture: ComponentFixture<MetasPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetasPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
