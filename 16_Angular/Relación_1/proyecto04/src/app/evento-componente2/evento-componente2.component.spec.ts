import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoComponente2Component } from './evento-componente2.component';

describe('EventoComponente2Component', () => {
  let component: EventoComponente2Component;
  let fixture: ComponentFixture<EventoComponente2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoComponente2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoComponente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
