import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitrabajoComponent } from './mitrabajo.component';

describe('MitrabajoComponent', () => {
  let component: MitrabajoComponent;
  let fixture: ComponentFixture<MitrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
