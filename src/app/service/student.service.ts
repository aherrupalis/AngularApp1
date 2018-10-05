import {Injectable} from '@angular/core';

@Injectable()

export class StudentService{

    public stud:any=[
                        {Name:'Rupali', class:'Angular' },
                        {Name:'Yash',class:'Java'}
                    ];

    public getStudent()
    {
        return this.stud;
    }
}