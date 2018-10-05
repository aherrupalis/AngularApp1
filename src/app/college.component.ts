import {Component} from '@angular/core';

@Component({
    selector:'collg-comp',
    templateUrl:'./college.component.html',
    styleUrls:[]
})

export class CollegeComponent
{
public name:string='Pune University'
public title:string;
public get()
{
this.title='Assimilate Technologies, Pune'
}
}