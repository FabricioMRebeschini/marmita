import { Component } from '@angular/core';
import { PackageListComponent } from "./package-list/package-list.component";
import { PackageDetailsComponent } from './package-details/package-details.component';

@Component({
  selector: 'app-packages',
  imports: [PackageListComponent, PackageDetailsComponent],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent {

}
