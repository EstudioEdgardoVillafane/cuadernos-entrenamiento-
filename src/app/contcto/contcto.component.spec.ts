import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContctoComponent } from './contcto.component';

describe('ContctoComponent', () => {
  let component: ContctoComponent;
  let fixture: ComponentFixture<ContctoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContctoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContctoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
