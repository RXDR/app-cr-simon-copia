/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrProgramasComponent } from './cr-Programas.component';

describe('CrProgramasComponent', () => {
  let component: CrProgramasComponent;
  let fixture: ComponentFixture<CrProgramasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrProgramasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrProgramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
