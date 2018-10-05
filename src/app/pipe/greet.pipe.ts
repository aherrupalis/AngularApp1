import{Pipe,PipeTransform} from '@angular/core';
                                                                                                                                
@Pipe({
    name: 'greet'
})


export class greetPipe implements PipeTransform{
    transform(value:string, para:string){
        return para?'Hello '+ value +','+para:'Hello '+ value 
        // if(para)
        // {
        //     return 'Hello '+ value +','+para;
        // }else
        // {
        //     return 'Hello '+ value ;
        // }
        
    }
}