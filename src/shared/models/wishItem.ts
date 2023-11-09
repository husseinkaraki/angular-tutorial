import { Component, NgModule } from '@angular/core';


export class WishItem {
    constructor(public wishText : string, public isComplete : boolean = false) {

    }
}