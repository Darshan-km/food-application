import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestFoodListsComponent } from './best-food-lists/best-food-lists.component';
import { BestFoodDetailComponent } from './best-food-detail/best-food-detail.component';


const routes: Routes = [
  { path: '',  component: BestFoodListsComponent },
  // tslint:disable-next-line: max-line-length
  { path: 'best-food-detail',  component: BestFoodDetailComponent },
  //{ path: 'best-food-detail', loadChildren: () => import('./best-food-detail/best-food-detail.module#BestFoodDetailModule').then(m => m.BestFoodDetailModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
