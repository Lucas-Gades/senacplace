import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCategorias } from './tabela-categorias';

describe('TabelaCategorias', () => {
  let component: TabelaCategorias;
  let fixture: ComponentFixture<TabelaCategorias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaCategorias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaCategorias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
