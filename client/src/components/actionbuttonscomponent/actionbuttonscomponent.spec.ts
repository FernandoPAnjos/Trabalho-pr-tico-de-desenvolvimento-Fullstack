import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actionbuttonscomponent } from './actionbuttonscomponent';

describe('Actionbuttonscomponent', () => {
  let component: Actionbuttonscomponent;
  let fixture: ComponentFixture<Actionbuttonscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actionbuttonscomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actionbuttonscomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
