import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesActualComponent } from './mes-actual.component';

describe('MesActualComponent', () => {
  let component: MesActualComponent;
  let fixture: ComponentFixture<MesActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
