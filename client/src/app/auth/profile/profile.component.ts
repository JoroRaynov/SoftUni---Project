import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userData: IUser[] | null = null;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    
    this.apiService.userProfile().subscribe({
      next: (value) => {
        this.userData = value;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
