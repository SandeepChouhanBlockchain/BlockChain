import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodrequestlistComponent } from './bloodrequestlist.component';

describe('BloodrequestlistComponent', () => {
  let component: BloodrequestlistComponent;
  let fixture: ComponentFixture<BloodrequestlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodrequestlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodrequestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
