import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../api.service';
import { IAd } from '../shared/interfaces/ad';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {

  adList: IAd[] | null = null;

  constructor(private apiService: ApiService) { }
  

  ngOnInit(): void {
    this.apiService.loadOnlySixAds().subscribe({
      next: (value) => {
        
        this.adList = value;
      },
      error: (error) => console.log(error)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
