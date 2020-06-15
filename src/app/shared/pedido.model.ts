import { ItemCarrinho } from './item-carrinho.model';

export class Pedido {
  constructor(
    public endereco: string,
    public numero: string,
    public complemento: string,
    public formaPgto: string,
    public itens: Array<ItemCarrinho>
  ) { }
}
