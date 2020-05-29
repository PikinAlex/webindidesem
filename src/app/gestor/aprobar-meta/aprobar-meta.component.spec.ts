import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarMetaComponent } from './aprobar-meta.component';

describe('AprobarMetaComponent', () => {
  let component: AprobarMetaComponent;
  let fixture: ComponentFixture<AprobarMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobarMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobarMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
