import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IAd } from 'src/app/shared/interfaces/ad';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.css']
})
export class NewAdComponent implements OnInit {
  _error = null;

  createAdGroup: FormGroup = this.formBuilder.group({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    category: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    imageUrl: new FormControl('', [Validators.required, Validators.pattern(/^[http | https]+/)]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    location: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required])
  })
  
  constructor(private router: Router, private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   
  }

  hanlderNewAd(): void{
    if (this.createAdGroup.invalid) {
      return;
    }
    const { title, category, description, imageUrl, price, location, contact } = this.createAdGroup.value;

    this.apiService.creteAd( title, category, description, imageUrl, price, location, contact ).subscribe({
      next: (data) => {
      },
      error: (error) => {
        this._error = error.error.message;
      }
    })
    // this.router.navigate(['/data/catalog'])
      this.router.navigate(['/']);
    
  }
}
