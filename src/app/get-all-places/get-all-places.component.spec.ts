import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPlacesComponent } from './get-all-places.component';

describe('GetAllPlacesComponent', () => {
  let component: GetAllPlacesComponent;
  let fixture: ComponentFixture<GetAllPlacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllPlacesComponent]
    });
    fixture = TestBed.createComponent(GetAllPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
