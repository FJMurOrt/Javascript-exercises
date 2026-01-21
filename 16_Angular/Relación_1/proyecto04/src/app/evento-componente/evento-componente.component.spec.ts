import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoComponenteComponent } from './evento-componente.component';

describe('EventoComponenteComponent', () => {
  let component: EventoComponenteComponent;
  let fixture: ComponentFixture<EventoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
