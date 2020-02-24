import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenedPackComponent } from './opened-pack.component';

describe('RarePackComponent', () => {
  let component: OpenedPackComponent;
  let fixture: ComponentFixture<OpenedPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenedPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenedPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
