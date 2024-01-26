import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBodyComponent } from './dialog.body.component';

describe('DialogBodyComponent', () => {
  let component: DialogBodyComponent;
  let fixture: ComponentFixture<DialogBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogBodyComponent]
    });
    fixture = TestBed.createComponent(DialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
