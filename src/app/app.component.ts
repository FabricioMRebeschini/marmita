import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PackagesComponent } from './packages/packages.component';
import { FoodListComponent } from './food-list/food-list.component';
import { HeaderComponent } from './header/header.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PackagesComponent, FoodListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
