import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IUser } from '../../shared/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userData: IUser | null = null;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    
    this.apiService.userProfile('639db0af00ea3a86487085fe').subscribe({
      next: (value) => {
        console.log(value);
        this.userData = value;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
