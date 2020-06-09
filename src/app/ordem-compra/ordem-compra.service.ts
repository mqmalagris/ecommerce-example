import { Injectable } from '@angular/core';
import { Pedido } from '../shared/pedido.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService {

  private url_api: string = environment.API_URL

  constructor(private http: HttpClient) { }

  public efetivarCompra(pedido: Pedido): Observable<any>{

    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type':'application/json',
    })
    let options = {
      headers,
  }

    return this.http.post(
      `${this.url_api}pedidos`,
      JSON.stringify(pedido),
      options
    )
    .pipe(
      map((resposta: any)=> resposta.id
      )
    )
  }
}

