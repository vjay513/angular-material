import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from '../model/person.model';
import { Persons } from '../model/persons.model';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ajax } from 'rxjs/ajax';
const PERSONS = '../../assets/person.json';

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
  @ViewChild(MatTable, {static: true}) table: MatTable<Person>;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    const users = ajax(PERSONS);
    const subscribe = users.subscribe(
      res => {
        this.dataSource.data = res.response;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err => console.error(err)
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  updateRowData(rowObj) {
    console.log(rowObj);
    const alter = this.dataSource.data.filter((value) => {
      if (value.id === rowObj.id) {
        value.name = rowObj.name;
      }
      return true;
    });
    this.dataSource.data = alter;
  }

  deleteRowData(rowObj) {
    const alter = this.dataSource.data.filter(row => {
      return row.id !== rowObj.id;
    });
    this.dataSource.data = alter;
  }
}

