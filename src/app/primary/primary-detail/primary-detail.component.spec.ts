import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryDetailComponent } from './primary-detail.component';

describe('PrimaryDetailComponent', () => {
  let component: PrimaryDetailComponent;
  let fixture: ComponentFixture<PrimaryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
