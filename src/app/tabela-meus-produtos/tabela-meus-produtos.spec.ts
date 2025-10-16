import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaMeusProdutos } from './tabela-meus-produtos';

describe('TabelaMeusProdutos', () => {
  let component: TabelaMeusProdutos;
  let fixture: ComponentFixture<TabelaMeusProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaMeusProdutos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaMeusProdutos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
