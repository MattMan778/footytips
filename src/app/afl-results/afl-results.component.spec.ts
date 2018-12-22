import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AflResultsComponent } from './afl-results.component';

describe('AflResultsComponent', () => {
  let component: AflResultsComponent;
  let fixture: ComponentFixture<AflResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AflResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AflResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
