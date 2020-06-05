import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.services';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = ''

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((parametros: any)=>{
      this.ofertasService.getOndeFicaOfertaPorId(parametros.id)
      .then((descricao: any)=> {
        this.ondeFica = descricao
      })
    })

  }

}
