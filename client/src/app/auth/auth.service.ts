import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { tap, map} from 'rxjs/operators';
import { IUser } from '../shared/interfaces/user';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { getSession } from './util/api';

const apiURL = environment.apiURL;


// export interface CreateUserDto {
//   email: string, password: string, tel?: string
// }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null;

  get getUser() {
    return this.user;
  }

  get isLoggedIn() {
    return localStorage.getItem('currentUser');
  }
  
  constructor(private router: Router,private httpClient: HttpClient) { }

  register$(email: string, password: string, tel?: string): Observable<IUser> {

    return this.httpClient.post<IUser>(`${apiURL}/auth/register`, {email, password, tel})
  }

  login$(userData: {email: string, password: string}) {
  
    return this.httpClient.post<IUser>(`${apiURL}/auth/login`, userData);
    

  }

  logout() {
    localStorage.removeItem('currentUser');
    return this.router.navigate(['/']);
  }

  userProfile() {
    const accessToken = getSession().token.accessToken;
    
    return this.httpClient.get<IUser>(`${apiURL}/auth/profile`, {headers: {'x-authorization': accessToken}});
  }
}
