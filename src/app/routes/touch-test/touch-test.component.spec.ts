import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchTestComponent } from './touch-test.component';

describe('TouchTestComponent', () => {
  let component: TouchTestComponent;
  let fixture: ComponentFixture<TouchTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
