import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchMeNotButtonComponent } from './touch-me-not-button.component';

describe('TouchMeNotButtonComponent', () => {
  let component: TouchMeNotButtonComponent;
  let fixture: ComponentFixture<TouchMeNotButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchMeNotButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchMeNotButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
