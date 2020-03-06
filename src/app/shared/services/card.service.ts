import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT } from 'src/app/constants/endpoint';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor( private httpClient: HttpClient ) { }

  getVirgiCard( virgiCardId ): Promise<any> {
    return this.httpClient.get(`${ENDPOINT.URL_CARD}/${virgiCardId}`).toPromise();
  }

  getAllVirgiCards(): Promise<any> {
    return this.httpClient.get(ENDPOINT.URL_ALL_CARDS).toPromise();
  }

  getVirgiExtraData(virgiCardId): Promise<any> {
    return this.httpClient.get(`${ENDPOINT.URL_CARD_DETAILS}${virgiCardId}`).toPromise();
  }

  buyPack(user) {
    return this.httpClient.post<any>(`${ENDPOINT.URL}/packs/buy`, {
      params: {
        virgiUserId: user
      }
    });
  }
}
