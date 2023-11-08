import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { EventsComponent } from './components/events/events.component';
import { ChildToParentComponent } from './components/child-to-parent/child-to-parent.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { AngularformsComponent } from './components/angularforms/angularforms.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { NgrxComponent } from './components/ngrx/ngrx.component';
import { ScriptJSComponent } from './components/script-js/script-js.component';

const routes: Routes = [
  {path:'emp', component:EmployeesComponent},
  {path:'event', component:EventsComponent},
  {path:'child', component:ChildToParentComponent},
  {path:'lifecycle', component:LifecycleComponent},
  {path:'form', component:AngularformsComponent},
  {path:'animation', component:AnimationsComponent},
  {path:'ngx', component:NgrxComponent},
  {path:'', component:ScriptJSComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
