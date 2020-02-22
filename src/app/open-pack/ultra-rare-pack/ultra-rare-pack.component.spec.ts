import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraRarePackComponent } from './ultra-rare-pack.component';

describe('UltraRarePackComponent', () => {
  let component: UltraRarePackComponent;
  let fixture: ComponentFixture<UltraRarePackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltraRarePackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltraRarePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
