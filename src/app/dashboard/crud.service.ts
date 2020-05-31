import { Injectable } from '@angular/core';
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

}
