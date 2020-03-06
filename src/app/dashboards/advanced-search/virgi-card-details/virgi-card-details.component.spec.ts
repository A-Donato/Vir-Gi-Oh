import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirgiCardDetailsComponent } from './virgi-card-details.component';

describe('VirgiCardDetailsComponent', () => {
  let component: VirgiCardDetailsComponent;
  let fixture: ComponentFixture<VirgiCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirgiCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirgiCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
