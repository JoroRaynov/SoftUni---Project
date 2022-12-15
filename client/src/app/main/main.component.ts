import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IAd } from '../shared/interfaces/ad';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  adList: IAd[] | null = null;

  constructor(private apiService: ApiService) { }
//TODO GET LAST 6 ADS
  ngOnInit(): void {
    this.apiService.loadAds().subscribe({
      next: (value) => {
        this.adList = value.slice(-6);
      },
      error: (error) => console.log(error)
    })
  }

}
