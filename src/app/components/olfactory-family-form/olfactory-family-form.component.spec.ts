import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfactoryFamilyFormComponent } from './olfactory-family-form.component';

describe('OlfactoryFamilyFormComponent', () => {
  let component: OlfactoryFamilyFormComponent;
  let fixture: ComponentFixture<OlfactoryFamilyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlfactoryFamilyFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OlfactoryFamilyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
