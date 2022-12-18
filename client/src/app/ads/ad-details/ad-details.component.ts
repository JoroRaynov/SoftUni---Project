import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IAd } from 'src/app/shared/interfaces/ad';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.css'],
})
export class AdDetailsComponent implements OnInit {

  _isOwner: boolean = false;

  adDetails!: IAd;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const adId = this.activatedRoute.snapshot.params['id'];
    this.apiService.loadAd(adId).subscribe(ad => {
      this.adDetails = ad;
    });
    this.authService.userProfile().subscribe({
      next: (user) => {
        if(user.userAds.includes(adId)){
          this._isOwner = true;
        }
      }
    });
  }
}
  
   
    
  


