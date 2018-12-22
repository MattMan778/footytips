import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AflLadderComponent } from './afl-ladder.component';

describe('AflLadderComponent', () => {
  let component: AflLadderComponent;
  let fixture: ComponentFixture<AflLadderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AflLadderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AflLadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
