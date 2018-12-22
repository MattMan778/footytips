import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipLadderComponent } from './tip-ladder.component';

describe('TipLadderComponent', () => {
  let component: TipLadderComponent;
  let fixture: ComponentFixture<TipLadderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipLadderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipLadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
