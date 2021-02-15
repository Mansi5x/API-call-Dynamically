import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicemasterlistComponent } from './servicemasterlist.component';

describe('ServicemasterlistComponent', () => {
  let component: ServicemasterlistComponent;
  let fixture: ComponentFixture<ServicemasterlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicemasterlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicemasterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
