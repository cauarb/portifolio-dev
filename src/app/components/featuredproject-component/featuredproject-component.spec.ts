import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedprojectComponent } from './featuredproject-component';

describe('FeaturedprojectComponent', () => {
  let component: FeaturedprojectComponent;
  let fixture: ComponentFixture<FeaturedprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedprojectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
