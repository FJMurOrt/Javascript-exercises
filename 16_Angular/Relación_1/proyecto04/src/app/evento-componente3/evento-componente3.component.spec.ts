import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoComponente3Component } from './evento-componente3.component';

describe('EventoComponente3Component', () => {
  let component: EventoComponente3Component;
  let fixture: ComponentFixture<EventoComponente3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoComponente3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoComponente3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
