import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StudentComponent } from 'src/app/Student.component';
import { EmployeeComponent } from 'src/app/Employee.component';
import { CustomOverDirective } from './dir/custom.attribute.dir';
import {CubePipe} from './pipe/cube.pipe';
import { greetPipe } from 'src/app/pipe/greet.pipe';
import { squrePipe } from 'src/app/pipe/custom.pipe';
import {CollegeComponent} from './college.component';
import {FormsModule} from '@angular/forms';
import { TemplateForm } from 'src/app/forms/templateform.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from 'src/app/forms/reactiveform.component';


@NgModule({
  declarations: [
    AppComponent,
  StudentComponent,EmployeeComponent,CustomOverDirective,
  CubePipe,greetPipe,squrePipe,
  CollegeComponent,TemplateForm,ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [ReactiveFormComponent]
})
export class AppModule { 
  
 }
