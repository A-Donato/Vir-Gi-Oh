import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedPackComponent } from './closed-pack.component';

describe('ClosedPackComponent', () => {
  let component: ClosedPackComponent;
  let fixture: ComponentFixture<ClosedPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
