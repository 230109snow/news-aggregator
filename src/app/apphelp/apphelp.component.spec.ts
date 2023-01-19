import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApphelpComponent } from './apphelp.component';

describe('ApphelpComponent', () => {
  let component: ApphelpComponent;
  let fixture: ComponentFixture<ApphelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApphelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApphelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
