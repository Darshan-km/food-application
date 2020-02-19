import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, from } from 'rxjs';
import { IRootObject } from '../food-lists';
@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private _url: string = 'http://temp.dash.zeta.in/food.php';
  constructor(private http: HttpClient) { }

  getFoodList(): Observable<IRootObject[]>{
    return this.http.get<IRootObject[]>(this._url);
  }

}
