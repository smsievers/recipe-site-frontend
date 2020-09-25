import { Injectable } from '@angular/core';
import { environment } from "./../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Recipe } from './models/recipe';
import { User } from './models/user';
import { RecipeData } from './models/recipe-data';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl: string = environment.baseUrl;
  currentUser: User;

  constructor(private http: HttpClient) {}

  getAllRecipes(): Observable<RecipeData>{
    return this.http.get<RecipeData>(this.baseUrl + 'recipes/index');
  }

  getARecipe(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'recipes/show?id=' + id);
  }

  addRecipe(recipe: Recipe) {
    return this.http.post(this.baseUrl + 'recipes/create', recipe);
  }
}