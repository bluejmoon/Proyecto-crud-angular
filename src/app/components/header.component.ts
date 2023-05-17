import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    constructor(private router:Router){}

    redireccionHome(){
        this.router.navigate(['/']);
    }

    redireccionCrud(){
        this.router.navigate(['/crud']);
    }
}