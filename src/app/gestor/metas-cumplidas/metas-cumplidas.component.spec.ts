import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasCumplidasComponent } from './metas-cumplidas.component';

describe('MetasCumplidasComponent', () => {
  let component: MetasCumplidasComponent;
  let fixture: ComponentFixture<MetasCumplidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetasCumplidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasCumplidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
