import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Load01Component } from './load01.component';

describe('Load01Component', () => {
  let component: Load01Component;
  let fixture: ComponentFixture<Load01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Load01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Load01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
