import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IAd } from './interfaces/ad';
import { IUser } from './interfaces/user';



const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  
  constructor(private httpClient: HttpClient) {}

  loadAds() {
    return this.httpClient.get<IAd[]>(`${apiURL}/data/catalog`);
  }
  

  loadAd(id: string) {
    return this.httpClient.get<IAd>(`${apiURL}/data/catalog/${id}`);
  }

  userProfile() {
    return this.httpClient.get<IUser[]>(`${apiURL}/auth/profile`);
  }
}
