import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeBookComponent } from './see-book.component';

describe('SeeBookComponent', () => {
  let component: SeeBookComponent;
  let fixture: ComponentFixture<SeeBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
