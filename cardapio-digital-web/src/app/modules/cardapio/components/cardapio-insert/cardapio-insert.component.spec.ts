import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioInsertComponent } from './cardapio-insert.component';

describe('CardapioInsertComponent', () => {
  let component: CardapioInsertComponent;
  let fixture: ComponentFixture<CardapioInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardapioInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
