import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaIndicatorComponent } from './area-indicator.component';

describe('AreaIndicatorComponent', () => {
  let component: AreaIndicatorComponent;
  let fixture: ComponentFixture<AreaIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
