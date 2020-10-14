import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdonorlistComponent } from './registerdonorlist.component';

describe('RegisterdonorlistComponent', () => {
  let component: RegisterdonorlistComponent;
  let fixture: ComponentFixture<RegisterdonorlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterdonorlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterdonorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
