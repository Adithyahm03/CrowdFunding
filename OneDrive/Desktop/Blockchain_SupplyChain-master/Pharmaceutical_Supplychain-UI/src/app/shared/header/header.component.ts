import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(
        private router: Router,
        private location: Location
    ) { }

    goBack() {
        if (this.router.url !== '/home') {
            this.location.back();
        }
    }

    logout() {
        localStorage.removeItem('sessionRole');
        this.router.navigate(['/home']);
    }
}