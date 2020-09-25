import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  newRecipe: Recipe = new Recipe();
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }
  addRecipe() {
    this.recipeService.addRecipe(this.newRecipe).subscribe(data => {
      console.log(data);
    })
  }
}
