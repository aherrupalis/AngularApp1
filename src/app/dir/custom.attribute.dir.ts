import {Directive,ElementRef,HostListener,Input} from '@angular/core';

@Directive({
    selector:'[customOver]'
})


export class CustomOverDirective{
 constructor(private el:ElementRef){

 }
 @Input() customOver:string;
 @HostListener('mouseenter') onmouseenter()
 {
    this.el.nativeElement.style.backgroundColor=this.customOver;
 }

 @HostListener('mouseleave')onmouseleave(){
     this.el.nativeElement.style.backgroundColor='yellow';
    //this.el.nativeElement.style.backgroundColor='yellow';
 }

}