import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IAd } from 'src/app/shared/interfaces/ad';

@Component({
  selector: 'app-edit-ad',
  templateUrl: './edit-ad.component.html',
  styleUrls: ['./edit-ad.component.css'],
})
export class EditAdComponent implements OnInit {
  _error = null;
  adDetails: IAd | null = null;
  adId: string = '';
  editAdGroup: FormGroup = this.formBuilder.group({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    category: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    imageUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[http | https]+/),
    ]),
    price: new FormControl(null, [Validators.required, Validators.min(1)]),
    location: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.adId = this.activatedRoute.snapshot.params['id'];

    this.apiService.loadAd(this.adId).subscribe({
      next: (data) => {
        this.adDetails = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  hanlderEditAd(): void {
    if (this.editAdGroup.invalid) {
    
      console.log(this.editAdGroup.value);
      return;
    }
    const { title, category, description, imageUrl, price, location, contact } =
      this.editAdGroup.value;

    this.adId = this.activatedRoute.snapshot.params['id'];
    this.apiService
      .editAd(this.adId, {
        title,
        category,
        description,
        imageUrl,
        price,
        location,
        contact,
      })
      .subscribe({
        next: (data) => {
        },
        error: (error) => {
          this._error = error.error.message;
        },
      });

    this.router.navigate(['/']);
  }
}
