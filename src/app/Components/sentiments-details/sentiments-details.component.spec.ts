import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentsDetailsComponent } from './sentiments-details.component';

describe('SentimentsDetailsComponent', () => {
  let component: SentimentsDetailsComponent;
  let fixture: ComponentFixture<SentimentsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentimentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
