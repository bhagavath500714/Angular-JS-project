import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, Subject, Subscription } from "rxjs";
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort } from "@angular/material/sort";
import { EmployeeService } from 'src/app/services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';


export interface EmployeeDataTypes {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  publishDate: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'pageCount', 'publishDate', 'actions'];
  tableHeaders: string[] = ['Position', 'Title', 'Description', 'Page Count', 'Publish Date', 'actions'];

  dataSource = new MatTableDataSource<EmployeeDataTypes>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  dataLoading: boolean = false;
  centered = false;
  modalData:any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /* Subscribers */
  private empDataSub!: Subscription;

  constructor(private employeeService: EmployeeService, private _dialog: MatDialog,) { }

  ngOnInit() {
    this.dataLoading = true;
    this.empDataSub = this.employeeService.getData().subscribe((apiRes: any) => {
      this.renderTableData(apiRes);
    });
  }

  renderTableData(reponse: any) {
    // console.log('--data--', reponse);
    if (reponse) {
      // Assign the 'data' array to the MatTableDataSource
      this.dataSource = reponse;
      this.dataSource = new MatTableDataSource(reponse);

      // Set up pagination and sorting
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataLoading = false;

    } else {
      // Handle error or display a message
      console.error('API request failed.');
      this.dataLoading = true;
    }
  }

  public openBookDialog(e:any, type:string) {
    if(type == 'edit') {
      this.employeeService.getById(e.id).subscribe((apiRes: EmployeeDataTypes) => {
        this.modalData = apiRes;
        console.log('---log---', this.modalData);

        this.openDialogWithEditData();  
        
      });
    } else {
      this.openDialogWithEditData(); 
    }
  }
  
  private openDialogWithEditData() {
    let config = {height: '85%', width: '75%', id: 'add_book'}
    const dialogRef = this._dialog.open(AddEmployeeComponent, {
      panelClass: 'employeeWrap',
      data: {
        editData: this.modalData,
      },
      width: config.width,
      height: config.height,
      id: config.id,    
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('result--', result);
      if(result) {
        this.loadData();
      }
    });
  }

  loadData() {
    this.employeeService.getData().subscribe((data: any) => {
      this.renderTableData(data);
    });
  }

  deleteRow(e:any){
    this.employeeService.delete(e.id).subscribe((response: any) => {
      console.log('del-response', response);
    });
  }

  ngOnDestroy() { 
    this.empDataSub.unsubscribe();
  }

}




