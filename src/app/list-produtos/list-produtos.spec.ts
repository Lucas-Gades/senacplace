import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProdutos } from './list-produtos';

describe('ListProdutos', () => {
  let component: ListProdutos;
  let fixture: ComponentFixture<ListProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProdutos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProdutos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
