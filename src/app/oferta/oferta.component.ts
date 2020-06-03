import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/oferta.model';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta
        console.log(this.oferta);

      })
      // this.route.params.subscribe((parametro:any)=>{console.log(parametro);},
      //   (erro: any)=> console.log(erro),
      //   ()=> console.log('processamento foi classificado como concluido')

      //   )

    let tempo = interval
  }
}
