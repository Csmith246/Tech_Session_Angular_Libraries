import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCoreComponent } from './common-core.component';

describe('CommonCoreComponent', () => {
  let component: CommonCoreComponent;
  let fixture: ComponentFixture<CommonCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
