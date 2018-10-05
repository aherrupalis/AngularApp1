import{Pipe,PipeTransform} from '@angular/core';


@Pipe ({
    name:'squre'
})

export class squrePipe implements PipeTransform{
transform(value:number){
return value*value;
}
}