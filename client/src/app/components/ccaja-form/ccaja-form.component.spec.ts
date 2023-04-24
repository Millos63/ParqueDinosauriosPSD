import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCajaFormComponent } from './ccaja-form.component';

describe('CCajaFormComponent', () => {
  let component: CCajaFormComponent;
  let fixture: ComponentFixture<CCajaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCajaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCajaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
