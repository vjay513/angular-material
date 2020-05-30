import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Persons } from '../model/persons.model';
import { MatTableDataSource } from '@angular/material/table';

const PERSONS = '../../assets/person.json';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  dataSource: Persons[];

  constructor() { }

  loadPersons() {
    const users = ajax(PERSONS);
    return users;
  }

  setPersons(dataSource: Persons[]) {
    this.dataSource = dataSource;
  }

  updateRow(target: Persons) {
    return this.dataSource.filter((value) => {
      if (value.id === target.id) {
        value.name = target.name;
      }
      return true;
    });
  }

  deleteRow(target: Persons) {
    return this.dataSource.filter(row => {
      return row.id !== target.id;
    });
  }
}
