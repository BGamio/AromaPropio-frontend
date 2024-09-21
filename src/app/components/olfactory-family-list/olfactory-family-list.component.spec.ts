import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfactoryFamilyListComponent } from './olfactory-family-list.component';

describe('OlfactoryFamilyListComponent', () => {
  let component: OlfactoryFamilyListComponent;
  let fixture: ComponentFixture<OlfactoryFamilyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlfactoryFamilyListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OlfactoryFamilyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
