import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryListComponent } from './primary-list.component';

describe('PrimaryListComponent', () => {
  let component: PrimaryListComponent;
  let fixture: ComponentFixture<PrimaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
