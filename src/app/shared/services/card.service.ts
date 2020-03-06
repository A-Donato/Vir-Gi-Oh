import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT } from 'src/app/constants/endpoint';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) { }

  buyPack(user) {
    return this.httpClient.post<any>(`${ENDPOINT.URL}/packs/buy`, {
      params: {
        virgiUserId: user
      }
    });
  }
}
