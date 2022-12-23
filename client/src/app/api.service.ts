import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IAd } from './shared/interfaces/ad';
import { IUser } from './shared/interfaces/user';
import { Observable, Subject, tap } from 'rxjs';
import { getSession } from './auth/util/api';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded() {
    return this._refreshNeeded$;
  }

  loadOnlySixAds() {
    return this.httpClient.get<IAd[]>(`${apiURL}/data/catalog/six`);
  }

  loadAds() {
    return this.httpClient.get<IAd[]>(`${apiURL}/data/catalog`);
  }

  loadAd(id: string): Observable<IAd> {
    return this.httpClient.get<IAd>(`${apiURL}/data/catalog/${id}`);
  }

  getAdsByUserId(id: string) {
    return this.httpClient.get<IAd[]>(
      `${apiURL}/data/catalog?where=_ownerId%3D%22${id}%22`
    );
  }

  creteAd(
    title: string,
    category: string,
    description: string,
    imageUrl: string,
    price: number,
    location: string,
    contact: string
  ) {
    const accessToken = getSession().token.accessToken;
    return this.httpClient.post<IAd>(
      `${apiURL}/data/catalog`,
      { title, category, description, imageUrl, price, location, contact },
      { headers: { 'x-authorization': accessToken } }
    );
  }

  editAd(id: string, body: any) {
    const accessToken = getSession().token.accessToken;

    return this.httpClient.put<IAd>(`${apiURL}/data/catalog/${id}`, body, {
      headers: { 'x-authorization': accessToken },
    });
  }

  deleteAd(id: string) {
    const accessToken = getSession().token.accessToken;
    return this.httpClient.delete(`${apiURL}/data/catalog/${id}`, {
      headers: { 'x-authorization': accessToken },
    });
  }
}
