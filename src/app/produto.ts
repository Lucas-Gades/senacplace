export class Produto {
  id?: number;
  usuarioId?: number;
  titulo?: string;
  categoria?: string;
  condicao?: string;
  descricao?: string;
  preco?: number;
  fotos?: string[];
  formasPagamento?: string[];
  aceitaTroca?: boolean;
  cidade?: string;
  opcoesEntrega?: string[];
  contato?: string;
  dataPublicacao?: Date;
}