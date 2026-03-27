import { Component, OnInit } from '@angular/core';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { Food } from '../shared/food.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-food-list',
  imports: [FoodEditComponent, NgFor],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent implements OnInit {

  foodList: Food[] = [
      new Food('Arroz', 2),
      new Food('Carne' , 1),
      new Food('Feijão', 3)
  ];
  constructor() { }

  ngOnInit(): void {

  };
