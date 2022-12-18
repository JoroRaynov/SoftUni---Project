import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-delete-ad',
  templateUrl: './delete-ad.component.html',
  styleUrls: ['./delete-ad.component.css']
})
export class DeleteAdComponent implements OnInit {

  adId: string = '';
  
  constructor(private activatedRoute: ActivatedRoute,private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.adId = this.activatedRoute.snapshot.params['id'];
    this.apiService.deleteAd(this.adId).subscribe(data => {
    });
    this.router.navigate(['/']);
  }

}
