import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsToolBarComponent } from './as-tool-bar.component';

describe('AsToolBarComponent', () => {
  let component: AsToolBarComponent;
  let fixture: ComponentFixture<AsToolBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsToolBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
