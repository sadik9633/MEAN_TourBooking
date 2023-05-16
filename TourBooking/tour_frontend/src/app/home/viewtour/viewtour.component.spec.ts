import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtourComponent } from './viewtour.component';

describe('ViewtourComponent', () => {
  let component: ViewtourComponent;
  let fixture: ComponentFixture<ViewtourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
