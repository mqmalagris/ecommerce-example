import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.services';
import  { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCatergoria('diversao')
      .then((ofertas: Oferta[]) => {

        this.ofertas = ofertas

      });
  }

}
