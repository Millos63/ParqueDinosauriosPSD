import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcajaFormComponent } from './acaja-form.component';

describe('AcajaFormComponent', () => {
  let component: AcajaFormComponent;
  let fixture: ComponentFixture<AcajaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcajaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcajaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
