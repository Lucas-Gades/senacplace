import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalheProduto } from './modal-detalhe-produto';

describe('ModalDetalheProduto', () => {
  let component: ModalDetalheProduto;
  let fixture: ComponentFixture<ModalDetalheProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDetalheProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDetalheProduto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
