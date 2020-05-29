import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMetaComponent } from './crear-meta.component';

describe('CrearMetaComponent', () => {
  let component: CrearMetaComponent;
  let fixture: ComponentFixture<CrearMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
