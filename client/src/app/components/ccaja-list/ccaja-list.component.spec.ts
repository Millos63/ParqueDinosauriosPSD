import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCajaListComponent } from './ccaja-list.component';

describe('CCajaListComponent', () => {
  let component: CCajaListComponent;
  let fixture: ComponentFixture<CCajaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCajaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCajaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
