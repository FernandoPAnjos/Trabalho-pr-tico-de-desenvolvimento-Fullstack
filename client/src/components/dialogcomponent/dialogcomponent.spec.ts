import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogcomponent } from './dialogcomponent';

describe('Dialogcomponent', () => {
  let component: Dialogcomponent;
  let fixture: ComponentFixture<Dialogcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dialogcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dialogcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
