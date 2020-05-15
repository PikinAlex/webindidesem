import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEstrategiaComponent } from './agregar-estrategia.component';

describe('AgregarEstrategiaComponent', () => {
  let component: AgregarEstrategiaComponent;
  let fixture: ComponentFixture<AgregarEstrategiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarEstrategiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEstrategiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
