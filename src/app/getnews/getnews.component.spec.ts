import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetnewsComponent } from './getnews.component';

describe('GetnewsComponent', () => {
  let component: GetnewsComponent;
  let fixture: ComponentFixture<GetnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
