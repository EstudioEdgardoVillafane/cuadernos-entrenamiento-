import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendUsuarioComponent } from './backend-usuario.component';

describe('BackendUsuarioComponent', () => {
  let component: BackendUsuarioComponent;
  let fixture: ComponentFixture<BackendUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
