import{Component} from '@angular/core';

@Component({

    selector:'Stud-comp',
    templateUrl:'./student.component.html'
    
})

export class StudentComponent{
    
    num2=6;
    name:string ='Assimilate technology';
    name1:string ='Assimilate technology';
    name2:string ='Assimilate technology';
    TodaysDate=new Date();
    cost=100;
    var1:any={color:'pink'};
    myColor:any ={color:'red'};
    isHidden:boolean=true;
    public num=[1,2,3,4,5,6,7];
    isHide:boolean=false;
    public student=[{name:'Rupali',city:'Pune'},{name:'yash',city:'pune'}];
public myName='assimilate';
public cnum=10;
public num1=4;
public Name1='Rupali';
public changeColor()
{
this.myColor={color:'green'};
//this.isHide=!this.isHide;
}
}