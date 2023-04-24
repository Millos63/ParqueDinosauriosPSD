import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcajaListComponent } from './acaja-list.component';

describe('AcajaListComponent', () => {
  let component: AcajaListComponent;
  let fixture: ComponentFixture<AcajaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcajaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcajaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
