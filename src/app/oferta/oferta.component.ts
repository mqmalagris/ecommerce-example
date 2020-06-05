import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.route.params.subscribe((parametros: any)=> {

      this.ofertasService.getOfertasPorId(parametros.id)
      .then((oferta: Oferta) => {
        this.oferta = oferta
      })

    })


  }

  ngOnDestroy(): void {
  }
}
