import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryEditComponent } from './primary-edit.component';

describe('PrimaryEditComponent', () => {
  let component: PrimaryEditComponent;
  let fixture: ComponentFixture<PrimaryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
