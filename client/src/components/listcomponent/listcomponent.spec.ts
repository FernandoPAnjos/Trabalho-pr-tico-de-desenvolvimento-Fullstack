import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listcomponent } from './listcomponent';

describe('Listcomponent', () => {
  let component: Listcomponent;
  let fixture: ComponentFixture<Listcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
