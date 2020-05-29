import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarCuentaComponent } from './administrar-cuenta.component';

describe('AdministrarCuentaComponent', () => {
  let component: AdministrarCuentaComponent;
  let fixture: ComponentFixture<AdministrarCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
