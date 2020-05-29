import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanaActualComponent } from './semana-actual.component';

describe('SemanaActualComponent', () => {
  let component: SemanaActualComponent;
  let fixture: ComponentFixture<SemanaActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanaActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanaActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
