import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowValidateComponent } from './show-validate.component';

describe('ShowValidateComponent', () => {
  let component: ShowValidateComponent;
  let fixture: ComponentFixture<ShowValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowValidateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
