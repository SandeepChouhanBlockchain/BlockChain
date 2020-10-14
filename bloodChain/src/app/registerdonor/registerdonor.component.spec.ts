import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdonorComponent } from './registerdonor.component';

describe('RegisterdonorComponent', () => {
  let component: RegisterdonorComponent;
  let fixture: ComponentFixture<RegisterdonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterdonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterdonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
