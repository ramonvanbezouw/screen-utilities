import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchIndicatorComponent } from './touch-indicator.component';

describe('TouchIndicatorComponent', () => {
  let component: TouchIndicatorComponent;
  let fixture: ComponentFixture<TouchIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
