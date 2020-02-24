import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RarePackComponent } from './rare-pack.component';

describe('RarePackComponent', () => {
  let component: RarePackComponent;
  let fixture: ComponentFixture<RarePackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RarePackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RarePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
