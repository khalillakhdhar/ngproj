import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondecpComponent } from './secondecp.component';

describe('SecondecpComponent', () => {
  let component: SecondecpComponent;
  let fixture: ComponentFixture<SecondecpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondecpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondecpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
