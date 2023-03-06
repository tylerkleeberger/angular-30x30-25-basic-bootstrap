import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryItemComponent } from './primary-item.component';

describe('PrimaryItemComponent', () => {
  let component: PrimaryItemComponent;
  let fixture: ComponentFixture<PrimaryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
