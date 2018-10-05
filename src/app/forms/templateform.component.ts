import {Component} from '@angular/core';
import { concat } from 'rxjs/internal/observable/concat';

@Component({
    selector:'temp-form',
    templateUrl:'./templateform.component.html'
})

export class TemplateForm{

    public title:string='Template driven form demo!!'

    public saveInfo(data){
        console.log(JSON.stringify(data));
    }
}