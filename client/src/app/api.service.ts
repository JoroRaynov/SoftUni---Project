import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IAd } from './shared/interfaces/ad';
import { IUser } from './shared/interfaces/user';
import { Observable } from 'rxjs';



const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  
  constructor(private httpClient: HttpClient) {}

  loadAds() {
    return this.httpClient.get<IAd[]>(`${apiURL}/data/catalog`);
  }
  

  loadAd(id: string): Observable<IAd>{
    return this.httpClient.get<IAd>(`${apiURL}/data/catalog/${id}`);
  }

  userProfile() {
    return this.httpClient.get<IUser[]>(`${apiURL}/auth/profile`);
  }
}
