export default interface IVenda {
  id: string;
  nome: string;
  preco: number;
  status: 'processando' | 'pago' | 'falha';
  pagamento: 'cartao' | 'pix' | 'boleto';
  data: Date;
}
