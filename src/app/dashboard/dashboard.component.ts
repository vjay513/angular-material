import { Component, OnInit, ViewChild } from '@angular/core';
import { Persons } from '../model/persons.model';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { CrudService } from './crud.service';
import { Store, select } from '@ngrx/store';
import * as fromPerson from './store/person.reducer';
import { Observable } from 'rxjs';
import * as personActions from './store/person.action';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  persons$: Observable<Persons[]>;
  error$: Observable<string>;
  loader = true;
  displayedColumns: string[] = ['id', 'name', 'company', 'address', 'city', 'county', 'zip', 'phone', 'email', 'action'];
  dataSource = new MatTableDataSource<Persons>([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable, {static: true}) table: MatTable<Persons>;

  constructor(
  public dialog: MatDialog,
  public crud: CrudService,
  private store: Store<any>) {}

  ngOnInit() {
/*     this.store.dispatch(new personActions.LoadPersons());
    this.persons$ = this.store.pipe(select(fromPerson.getPersons));
    this.error$ = this.store.pipe(select(fromPerson.getError)); */
/*     this.store.dispatch(new personActions.LoadPersons());
    this.store.subscribe(state => {
      this.persons$ = this.store.pipe(select(fromPerson.getPersons));
      console.log(this.persons$);
    }); */
    this.store.dispatch({type: 'LOAD_PERSONS'});
    this.store.subscribe(state =>  {
      this.persons$ = state.persons.persons;
      this.loader = false;
      this.crud.setPersons(state.persons.persons);
      this.dataSource.data = state.persons.persons;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });


/*     this.crud.loadPersons().subscribe(
      res => {
        this.loader = false;
        this.crud.setPersons(res);
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      err => console.error(err)
    ); */
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action, target) {
    const data = {...target, action};
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      (result.event === 'Update') ? this.updateRowData(result.data) : this.deleteRowData(result.data);
    });
  }

  updateRowData(target) {
    this.dataSource.data = this.crud.updateRow(target);
  }

  deleteRowData(target) {
    this.dataSource.data = this.crud.deleteRow(target);
  }
}

