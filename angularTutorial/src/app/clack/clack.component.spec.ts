import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClackComponent } from './clack.component';

describe('ClackComponent', () => {
  let component: ClackComponent;
  let fixture: ComponentFixture<ClackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
