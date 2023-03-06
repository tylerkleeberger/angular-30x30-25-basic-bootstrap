import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryStartComponent } from './primary-start.component';

describe('PrimaryStartComponent', () => {
  let component: PrimaryStartComponent;
  let fixture: ComponentFixture<PrimaryStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
