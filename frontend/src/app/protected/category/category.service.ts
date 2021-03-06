import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppConfig} from '../../app.config';
import {Status} from '../../shared/model/active.model';
import {Category} from './category.model';
import {FilterModel} from "../../shared/model/filter.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getCategories() {
    return this.http.get(AppConfig.PROJECT_CATEGORY_API);
  }

  getFilteredCategories(filter: FilterModel) {
    return this.http.get(AppConfig.PROJECT_CATEGORY_API, {
      params: new HttpParams().set('q', JSON.stringify(filter))
    });
  }

  addCategory(category: Category) {
    return this.http.post(AppConfig.PROJECT_CATEGORY_API, category);
  }

  updateCategory(category: Category) {
    return this.http.put(AppConfig.PROJECT_CATEGORY_API + '/' + category.id, category);
  }

  toggleStatusCategory(id: number, status: Status) {
    return this.http.patch(AppConfig.PROJECT_CATEGORY_API + '/' + id, status);
  }

}
