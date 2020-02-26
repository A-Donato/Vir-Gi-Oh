import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperRarePackComponent } from './super-rare-pack.component';

describe('SuperRarePackComponent', () => {
  let component: SuperRarePackComponent;
  let fixture: ComponentFixture<SuperRarePackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperRarePackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperRarePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
