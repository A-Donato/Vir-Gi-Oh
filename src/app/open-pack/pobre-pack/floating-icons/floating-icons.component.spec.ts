import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingIcons } from './floating-lion-king.component';

describe('FloatingLionKingComponent', () => {
  let component: FloatingIcons;
  let fixture: ComponentFixture<FloatingIcons>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingIcons ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingIcons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
