import { 
        Directive,
        ElementRef, 
        OnInit,
        Renderer2,
        HostListener,
        HostBinding,
        Input
        } from '@angular/core';

@Directive({
    selector: '[appBasicHightlight]'
})

export class BasicHighlightDirective implements OnInit{
    
    @HostBinding('style.backgroundColor') bgColor: string;
    @HostBinding('style.color') color: string;
    
    @Input() defaultBgColor: string = 'blue';
    @Input() hoverBgColor: string = '#1e1e1e';

    defaultColor = 'black';
    hoverColor = "#4EC9B0";

    constructor(private elementRef: ElementRef, 
                private renderer : Renderer2,
                ){}
    ngOnInit(){
        this.bgColor = this.defaultBgColor;
        this.color = this.defaultColor;

        this.renderer.setStyle(this.elementRef.nativeElement,'font-size','20px');
        this.renderer.setStyle(this.elementRef.nativeElement,'color','black');
        // this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
    @HostListener('mouseenter') mouseover(event: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
        // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'yellow');
        // this.bgColor = 'purple';
        // this.color = 'pink';
        this.bgColor = this.hoverBgColor;
        this.color = this.hoverColor;
    }
    @HostListener('mouseleave') mouseleave(event: Event){
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');    
        // this.bgColor = 'transparent';
        // this.color = 'blue';
        this.bgColor = this.defaultBgColor;
        this.color = this.defaultColor;
    }
}