import {Component} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

import { StudentService } from 'src/app/service/student.service';

@Component({
    selector:'model-form',
    templateUrl:'./reactiveform.component.html',
    providers:[StudentService]
})

export class ReactiveFormComponent{

    public student:any;
    public StudentModel:FormGroup

    constructor( private st:StudentService){
        this.StudentModel=new FormGroup({
            name:new FormControl('Name',[Validators.required]),
            city: new FormControl('pune',[Validators.required]),
            phone: new FormControl('',[Validators.pattern('^[6-9]\d{9}$')])
        });
    }

    public getStudent()
    {
        this.student=this.st.getStudent();
    }
}