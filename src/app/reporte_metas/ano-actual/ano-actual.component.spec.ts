import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnoActualComponent } from './ano-actual.component';

describe('AnoActualComponent', () => {
  let component: AnoActualComponent;
  let fixture: ComponentFixture<AnoActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnoActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnoActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
