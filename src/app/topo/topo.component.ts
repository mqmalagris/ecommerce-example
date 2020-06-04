import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/oferta.model';
import { Observable, Subject, of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  public ofertas2: Oferta[]
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((termo:string)=>{
          if(termo.trim() === ''){
            // retornar observable de array de ofertas vazio
            return of<Oferta[]>([])
          }
          return this.ofertasService.pesquisaOfertas(termo)
        }),
        catchError((err: any, observable : Observable<Oferta[]>) => {
          return of<Oferta[]>([])
        })
      )

    this.ofertas.subscribe((ofertas : Oferta[]) => {
      console.log(ofertas)
      this.ofertas2 = ofertas
    }
    )
  }

  public pesquisa(termoDaBusca: string): void {
    console.log("keyup caracter:", termoDaBusca);

    this.subjectPesquisa.next(termoDaBusca)
  }
}
