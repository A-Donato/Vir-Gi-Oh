import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PobrePackComponent } from './pobre-pack.component';

describe('PobrePackComponent', () => {
  let component: PobrePackComponent;
  let fixture: ComponentFixture<PobrePackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PobrePackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PobrePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
