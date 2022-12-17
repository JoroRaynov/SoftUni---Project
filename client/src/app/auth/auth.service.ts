import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { tap} from 'rxjs/operators';
import { IUser } from '../shared/interfaces/user';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

const apiURL = environment.apiURL;


export interface CreateUserDto {
  email: string, password: string, tel?: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: IUser;

  get isLoggedIn() {
    return localStorage.getItem('currentUser');
  }
  
  constructor(private router: Router,private httpClient: HttpClient) { }

  register$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(`${apiURL}/auth/register`, userData)
  }

  login$(userData: {email: string, password: string}) {
    console.log(userData)
    return this.httpClient.post<IUser>(`${apiURL}/auth/login`, userData);
  }

  logout() {
    localStorage.removeItem('currentUser');
    return this.router.navigate(['/']);
  }
}
