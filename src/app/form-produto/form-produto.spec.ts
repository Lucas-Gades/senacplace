import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProdutos } from './form-produto';

describe('FormProduto', () => {
  let component: FormProdutos;
  let fixture: ComponentFixture<FormProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormProdutos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProdutos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
