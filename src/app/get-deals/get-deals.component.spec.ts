import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDealsComponent } from './get-deals.component';

describe('GetDealsComponent', () => {
  let component: GetDealsComponent;
  let fixture: ComponentFixture<GetDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
