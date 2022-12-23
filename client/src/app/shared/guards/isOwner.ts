import { Injectable, OnInit } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "src/app/api.service";
import { IAd } from "../interfaces/ad";

@Injectable({
    providedIn: 'root'
})
export class isOwner implements CanActivate, OnInit {

    
    constructor(private activatedRoute: ActivatedRoute,private router: Router, private apiService: ApiService ) {
     
    }
    ngOnInit(): void {
     
        }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const adId = this.activatedRoute.snapshot.params['id'];
        console.log(this.activatedRoute)
        ;
        console.log(adId);
        
        return true;
    }

}