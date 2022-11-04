/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InicioProgramasComponent } from './inicioProgramas.component';

describe('InicioProgramasComponent', () => {
  let component: InicioProgramasComponent;
  let fixture: ComponentFixture<InicioProgramasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioProgramasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioProgramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
