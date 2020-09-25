import { LocalStorageService } from './../local-storage.service';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [ ]

  constructor(private recipeService: RecipeService, private router: Router, 
    private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe(data => {
      this.recipes = data.recipes;
    })
  }

}
