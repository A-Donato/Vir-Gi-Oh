import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularPackComponent } from './regular-pack.component';

describe('RegularPackComponent', () => {
  let component: RegularPackComponent;
  let fixture: ComponentFixture<RegularPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
