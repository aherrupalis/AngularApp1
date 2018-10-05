import {Component} from '@angular/core';

@Component({
    selector:'Emp-comp',
    templateUrl:'./Employee.component.html'
})

export class EmployeeComponent{
    headingColor:any={color:'blue'};
    headingColor1:any={color:'pink'};
   public isHide:boolean=false;
public isHidden:boolean=false;
myColor='pink';
public Arr1=[1,2,3,4,5,6];
Arr2=['AB','AC','AD','AE','AF','AG'];
public color='orange';

public Employee=[{name:'Rupali', city:'Pune',designation:'SE'},
                   {name:'Pooja',city:'Mumbai',designation:'SE'},
                {name:'Priya', city:'nasik',designation:'SE'} ];


}