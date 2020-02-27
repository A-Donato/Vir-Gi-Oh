import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodsIconsComponent } from './gods-icons.component';

describe('GodsIconsComponent', () => {
  let component: GodsIconsComponent;
  let fixture: ComponentFixture<GodsIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodsIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
