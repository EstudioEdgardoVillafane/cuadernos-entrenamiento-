import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendContactoComponent } from './backend-contacto.component';

describe('BackendContactoComponent', () => {
  let component: BackendContactoComponent;
  let fixture: ComponentFixture<BackendContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
