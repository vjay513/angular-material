import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from '../model/person.model';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { DialogBoxComponent } from './dialog-box/dialog-box.component';

const ELEMENT_DATA: Person[] = [
  {id: 1, name: 'gvahcgva', age: 19, gender: 'Female', address: 'Hyderabad', phone: 9113434},
  {id: 2, name: 'sndc sffs', age: 29, gender: 'Female', address: 'Hyderabad', phone: 343434},
  {id: 3, name: 'hcvsvdjc', age: 9, gender: 'Female', address: 'Hyderabad', phone: 45454},
  {id: 4, name: 'hhcvg', age: 49, gender: 'Female', address: 'Hyderabad', phone: 67567},
  {id: 5, name: 'gvah1cgva', age: 15, gender: 'Female', address: 'Hyderabad', phone: 234234},
  {id: 6, name: 'gvah2cgva', age: 18, gender: 'Male', address: 'Hyderabad', phone: 564566},
  {id: 7, name: 'gvah3cgva', age: 197, gender: 'Male', address: 'Hyderabad', phone: 6745},
  {id: 8, name: 'gvah4cgva', age: 169, gender: 'Male', address: 'Hyderabad', phone: 45345},
  {id: 9, name: 'gvah5cgva', age: 129, gender: 'Male', address: 'Hyderabad', phone: 566},
  {id: 10, name: 'gvah6cgva', age: 159, gender: 'Male', address: 'Hyderabad', phone: 3423},
  {id: 11, name: 'gvahc6gva', age: 119, gender: 'Male', address: 'Hyderabad', phone: 567567},
  {id: 12, name: 'gvah3cgva', age: 1, gender: 'Male', address: 'Hyderabad', phone: 7878},
  {id: 13, name: 'gvah3cgva', age: 9, gender: 'Male', address: 'Hyderabad', phone: 234324},
  {id: 14, name: 'gvahc5gva', age: 99, gender: 'Male', address: 'Hyderabad', phone: 747583475},
  {id: 15, name: 'gvahc6gva', age: 33, gender: 'Female', address: 'Hyderabad', phone: 6478},
  {id: 16, name: 'gvah1cgva', age: 66, gender: 'Female', address: 'Hyderabad', phone: 9383},
  {id: 17, name: 'gva1hcgva', age: 34, gender: 'Female', address: 'Hyderabad', phone: 9292},
  {id: 18, name: 'gvahcgv1a', age: 24, gender: 'Female', address: 'Hyderabad', phone: 3648},
  {id: 19, name: 'g1vahcgva', age: 45, gender: 'Female', address: 'Hyderabad', phone: 7848},
  {id: 20, name: 'gvahcgva1', age: 18, gender: 'Female', address: 'Hyderabad', phone: 7635},
  {id: 21, name: 'gvahc2gva', age: 19, gender: 'Male', address: 'Hyderabad', phone: 93204},
  {id: 22, name: 'gv3ahcgva', age: 14, gender: 'Male', address: 'Hyderabad', phone: 536722},
  {id: 23, name: 'gvah4cgva', age: 12, gender: 'Male', address: 'Hyderabad', phone: 82282},
  {id: 24, name: 'gvahcgv6a', age: 19, gender: 'Male', address: 'Hyderabad', phone: 8292726},
  {id: 25, name: 'g7vahcgva', age: 19, gender: 'Male', address: 'Hyderabad', phone: 368282},
 ];



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'gender', 'address', 'phone', 'action'];
  dataSource = new MatTableDataSource<Person>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable, {static: true}) table: MatTable<Person>;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

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
    const alter = this.dataSource.data.filter((value) => {
      if (value.id === rowObj.id) {
        value.name = rowObj.name;
      }
      return true;
    });
    this.dataSource.data = alter;
  }

  deleteRowData(rowObj) {
    const alter = this.dataSource.data.filter(row =>{
      return row.id !== rowObj.id;
    });
    this.dataSource.data = alter;
  }
}

