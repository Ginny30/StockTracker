import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSymbolComponent } from './search-symbol.component';

describe('SearchSymbolComponent', () => {
  let component: SearchSymbolComponent;
  let fixture: ComponentFixture<SearchSymbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSymbolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
