import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FoodListService } from '../services/food-list.service';

@Component({
  selector: 'app-best-food-lists',
  templateUrl: './best-food-lists.component.html',
  styleUrls: ['./best-food-lists.component.scss']
})
export class BestFoodListsComponent implements OnInit {
  public favListToBind: any [];
  public favListsArray: any [];
  public favCategoriesList: any [];
  public filterSelectedCategories : any [];
  // tslint:disable-next-line: variable-name
  isShown: boolean = false ; //
  constructor(private _foodListService: FoodListService, private router: Router ) { }


  ngOnInit() {
  this.getfoodlist();
  }

  getfoodlist(){
    this._foodListService.getFoodList()
    .subscribe(data => {
      this.favListsArray = data['recipes'];
      this.filterSelectedCategories = this.favListsArray;
      this.favCategoriesList = data['categories'];
      this.favListToBind = this.favListsArray.filter(data => data.isFavourite === true);
    });
  }

  onClickFilter(list) {
    this.filterSelectedCategories = this.favListsArray;
    this.filterSelectedCategories = this.favListsArray.filter(i => i.category === list.name);
    console.log(this.filterSelectedCategories);
  }
  openSelectedCategoryDetail(list){
    const queryParam: NavigationExtras = {
      state: {
        listNavigation: list 
      }
     };
    this.router.navigate(['best-food-detail'], queryParam);
  }
  toggle(){
    this.isShown = ! this.isShown;
  }
}

