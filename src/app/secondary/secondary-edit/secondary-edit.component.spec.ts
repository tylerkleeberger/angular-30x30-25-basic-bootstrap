import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryEditComponent } from './secondary-edit.component';

describe('SecondaryEditComponent', () => {
  let component: SecondaryEditComponent;
  let fixture: ComponentFixture<SecondaryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
