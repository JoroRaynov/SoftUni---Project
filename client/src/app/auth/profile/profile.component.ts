import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IUser } from '../../shared/interfaces/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userData: IUser | null = null;

  get currentUser () {
    return this.authService.user;
  }
  
  
  constructor(private apiService: ApiService, private authService: AuthService) {}
  ngOnInit(): void {
  
    this.authService.userProfile().subscribe({
      next: (value) => {
        console.log(value)
        this.userData = value;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
