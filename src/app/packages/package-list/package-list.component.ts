import { Component, OnInit } from '@angular/core';
import { PackageItemComponent } from './package-item/package-item.component';
import { Package } from '../package.model';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-package-list',
  imports: [PackageItemComponent, NgFor],
  templateUrl: './package-list.component.html',
  styleUrl: './package-list.component.css'
})
export class PackageListComponent implements OnInit {
  packages: Package[] = [
    new Package("Churrasco", "Chorrasco de Picanha", "https://th.bing.com/th/id/OIP.BvoU9ddZNFmZiug00koomAHaE7?w=264&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"),
    new Package("Carne Seca", "Chorrasco de Carne Seca", "https://guiadacozinha.com.br/wp-content/uploads/2019/10/gratinado-de-carne-seca-com-mandioca-49750.jpg"),
    new Package("Picanha do Lula", "Chorrasco de Abobrinha", "https://tse1.explicit.bing.net/th/id/OIP.M4gUPY3mzu5nVsQk-qrqjAHaEW?rs=1&pid=ImgDetMain&o=7&rm=3"),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
