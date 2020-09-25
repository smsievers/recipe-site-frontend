import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { HomeComponent } from './home/home.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { RecipepageComponent } from './recipepage/recipepage.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'recipelist', component: RecipelistComponent},
{path: 'recipe/:id', component: RecipepageComponent},
{path: 'add-recipe', component: AddRecipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
