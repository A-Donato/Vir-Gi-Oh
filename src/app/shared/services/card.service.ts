import { Injectable } from '@angular/core';
import { ENDPOINT } from 'src/app/constants/endpoint';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor( private http: HttpClient ) { }

  getVirgiCard( virgiCardId ): Promise<any> {
    return this.http.get(`${ENDPOINT.URL_CARD}/${virgiCardId}`).toPromise();
  }
}
