import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingLionKingComponent } from './floating-lion-king.component';

describe('FloatingLionKingComponent', () => {
  let component: FloatingLionKingComponent;
  let fixture: ComponentFixture<FloatingLionKingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingLionKingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingLionKingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
