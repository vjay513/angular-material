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
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
    this.store.dispatch({type: 'LOAD_PERSONS'});
    this.loadTable();
  }

  loadTable() {
    this.store.subscribe(state =>  {
      this.dataSource.data = state.persons.persons;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
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
    this.store.dispatch({type: 'UPDATE_USERS', target});
  }

  deleteRowData(target) {
    this.store.dispatch({type: 'DELETE_USER', target});
  }
}

