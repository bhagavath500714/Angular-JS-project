import { Component, OnDestroy, Inject, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';

import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export interface EmployeeDataTypes {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  publishDate: string;
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class AddEmployeeComponent implements OnInit {
  booksForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private employeeService: EmployeeService,
    private dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      editData: EmployeeDataTypes;
    }
  ) { }

  ngOnInit() {
    this.booksDataForm();
  }

  booksDataForm() {
    this.booksForm = this._fb.group({
      title: [this.data?.editData?.title || '', [Validators.required]],
      description: [this.data?.editData?.description || '', [Validators.required]],
      pageCount: [this.data?.editData?.pageCount || 0, [Validators.required]],
      publishDate: [this.data?.editData?.publishDate || '', [Validators.required]],
    });
  }

  bookSubmit() {
    if (this.booksForm.valid) {
      const formData = this.booksForm.value;
      if (this.data.editData) {

        // // Format the date before sending
        // const formattedDate = moment(this.booksForm.value.publishDate).format('MM/DD/YYYY');
        // formData.publishDate = formattedDate;

        // Editing item logic
        console.log('Editing item:', formData);
        this.employeeService.update(this.data.editData.id, formData).subscribe((response: any) => {
          if (response) {
            console.log('--resp---', response);
            // this.getResult(response);
          }
        });
      } else {

        // Creating item logic
        console.log('Creating item:', formData);
        let payload = { id: 201,title: this.booksForm.value.title, description: this.booksForm.value.description, pageCount: this.booksForm.value.pageCount, publishDate: this.booksForm.value.publishDate };
        console.log('--peram--', payload);
        this.employeeService.create(payload).subscribe((response: any) => {
          console.log('--Res--', response);
          if (response) {
            // Format the date once response received
            const formattedDate = moment(response.publishDate).format('MM/DD/YYYY');
            response.publishDate = formattedDate;

            console.log('response---', response);
            setTimeout(() => { this.getResult(response); }, 1000);
          }
        });
      }
    }
  }



  getResult(res: any) {
    console.log('--func -in');
    this.dialogRef.close(res);
  }

}
