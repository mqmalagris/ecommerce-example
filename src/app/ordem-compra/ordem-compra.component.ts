import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from './ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number

  // Pedido

  public pedido: Pedido = new Pedido('','','','')

  //

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPgto: string = ''

  // controle de validação dos campos

  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPgtoValido: boolean

  // estado primitivos

  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPgtoEstadoPrimitivo: boolean = true

  // controlar botaõ confirmar compra

  public formEstado: string = 'disabled'

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit(): void {
    // this.ordemCompraService.efetivarCompra()
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco

    this.enderecoEstadoPrimitivo = false

    if (this.endereco.length > 2) {
      this.enderecoValido = true
    } else {
      this.enderecoValido = false
    }

    this.habilitaForm()
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero

    this.numeroEstadoPrimitivo = false

    if (this.numero.length > 0) {
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }

    this.habilitaForm()
  }

  public atualizaComplemento(comp: string): void {
    this.complemento = comp

    this.complementoEstadoPrimitivo = false

    if (this.complemento.length > 0) {
      this.complementoValido = true
    } else {
      this.complementoValido = false
    }

    // this.habilitaForm()

  }

  public atualizaFormaPgto(formaPgto: string): void {
    this.formaPgto = formaPgto

    this.formaPgtoEstadoPrimitivo = false

    if (this.formaPgto === 'dinheiro' || this.formaPgto === 'debito') {
      this.formaPgtoValido = true
    } else {
      this.formaPgtoValido = false
    }

    this.habilitaForm()
  }

  public habilitaForm():void {
    if (this.enderecoValido == true &&
    this.numeroValido == true &&
    this.formaPgtoValido == true){
      this.formEstado = ''
    } else {
      this.formEstado = 'disabled'
    }
  }

  public confirmarCompra() {

    this.pedido.endereco = this.endereco
    this.pedido.numero = this.numero
    this.pedido.complemento = this.complemento
    this.pedido.formaPgto = this.formaPgto

    this.ordemCompraService.efetivarCompra(this.pedido)
      .subscribe((idPedido: number)=> {
        this.idPedidoCompra = idPedido

      })
  }

}
