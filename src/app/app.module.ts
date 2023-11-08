import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { EventsComponent } from './components/events/events.component';
import { FormComponent } from './components/events/form/form.component';
import { ListComponent } from './components/events/list/list.component';
import { ChildFormComponent } from './components/child-to-parent/child-form/child-form.component';
import { ListParentComponent } from './components/child-to-parent/list-parent/list-parent.component';
import { ChildToParentComponent } from './components/child-to-parent/child-to-parent.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { LifecycleHeadComponent } from './components/lifecycle/lifecycle-head/lifecycle-head.component';
import { AngularformsComponent } from './components/angularforms/angularforms.component';
import { TemplateDrivenFormComponent } from './components/angularforms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/angularforms/reactive-form/reactive-form.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { counterReducer } from './store/counter.reducer';
import { CounterOutputComponent } from './components/ngrx/counter-output/counter-output.component';
import { CounterControlsComponent } from './components/ngrx/counter-controls/counter-controls.component';
import { NgrxComponent } from './components/ngrx/ngrx.component';
import { ScriptJSComponent } from './components/script-js/script-js.component';
import { MapFilterReduceComponent } from './components/script-js/map-filter-reduce/map-filter-reduce.component';
import { JsBaseComponent } from './components/script-js/js-base/js-base.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EventsComponent,
    FormComponent,
    ListComponent,
    ChildFormComponent,
    ListParentComponent,
    ChildToParentComponent,
    LifecycleComponent,
    LifecycleHeadComponent,
    AngularformsComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    AnimationsComponent,
    CounterOutputComponent,
    CounterControlsComponent,
    NgrxComponent,
    ScriptJSComponent,
    MapFilterReduceComponent,
    JsBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    StoreModule.forRoot({
      counter: counterReducer
    })
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
