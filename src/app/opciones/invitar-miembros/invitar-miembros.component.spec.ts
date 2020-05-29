import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitarMiembrosComponent } from './invitar-miembros.component';

describe('InvitarMiembrosComponent', () => {
  let component: InvitarMiembrosComponent;
  let fixture: ComponentFixture<InvitarMiembrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitarMiembrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitarMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
