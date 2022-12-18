import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../../api.service';
import { IAd } from '../../shared/interfaces/ad';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css']
})
export class AdsListComponent implements OnInit {
  
  adList: IAd[] | null = null;

  constructor(private apiService: ApiService) { }
  

  ngOnInit(): void {
    this.apiService.loadAds().subscribe({
      next: (value) => {
        this.adList = value;
      },
      error: (error) => console.log(error)
    })
  }

}
