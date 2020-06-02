import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


// import 'rxjs';

@Injectable()
export class OfertasService {

  private url_api: string = environment.API_URL;

  constructor(private http: HttpClient){}


  public getOfertas(): Promise<any> {
    return this.http.get(`${this.url_api}ofertas?destaque=true`)
        .toPromise()
        // .then((resposta: any) => {
        //   resposta
        // })
  }

  public getOfertasPorCatergoria(categoria: string): Promise<any> {
    return this.http.get(`${this.url_api}ofertas?categoria=${categoria}`)
      .toPromise()
  }

  public getOfertasPorId(id: number): Promise<any> {
    return this.http.get(`${this.url_api}ofertas?id=${id}`)
      .toPromise()
      .then((resposta) => {

        return resposta[0]

      })
  }
  public getComoUsarOfertaPorId(id: number): Promise<string>{
    return this.http.get(`${this.url_api}como-usar?id=${id}`)
      .toPromise()
      .then((resposta: any) => {

        return resposta[0].descricao

      })
  }
  public getOndeFicaOfertaPorId(id: number): Promise<string>{
    return this.http.get(`${this.url_api}onde-fica?id=${id}`)
      .toPromise()
      .then((resposta: any) => {

        return resposta[0].descricao

      })
  }
}




