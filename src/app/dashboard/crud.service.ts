import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Persons } from '../model/persons.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private PERSONS = '../../assets/person.json';

  dataSource: Persons[];

  constructor(private http: HttpClient) { }

  loadPersons(): Observable<Persons[]> {
    return this.http.get<Persons[]>(this.PERSONS);
  }

  setPersons(dataSource: Persons[]) {
    this.dataSource = dataSource;
  }

  updateRow(target: Persons) {

    const index = this.dataSource.findIndex((value) => {
      return value.id === target.id;
    });
    return [...this.dataSource, {...this.dataSource[index], name: target.name}];
  }

  deleteRow(target: Persons) {
    return this.dataSource.filter(row => {
      return row.id !== target.id;
    });
  }
}
