import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewnameComponent } from './newname.component';

describe('NewnameComponent', () => {
  let component: NewnameComponent;
  let fixture: ComponentFixture<NewnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
