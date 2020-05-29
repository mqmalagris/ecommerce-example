import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


// import 'rxjs';

@Injectable()
export class OfertasService {

  private url_api: string = environment.API_URL;

  constructor(private http: HttpClient){}


  public getOfertas(): Promise<any> {
    return this.http.get(`${this.url_api}?destaque=true`)
        .toPromise()
        // .then((resposta: any) => {
        //   resposta
        // })
  }

  public getOfertasPorCatergoria(categoria: string): Promise<any> {
    return this.http.get(`${this.url_api}?categoria=${categoria}`)
      .toPromise()
  }

  public getOfertasPorId(id: number): Promise<any> {
    return this.http.get(`${this.url_api}?id=${id}`)
      .toPromise()
      .then((resposta) => {
        console.log(resposta);

        return resposta[0]

      })
  }
}




