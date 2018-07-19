import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})

export class UnlessDirective {

  visible: boolean = true;

  @Input() set appUnless(condition: boolean) {
    console.log('---------------');
    this.visible = condition;
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  
  constructor(private vcRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {

    setTimeout(()=> {
      this.visible = !this.visible;
      console.log(this.visible);
      if (!this.visible) {
        this.vcRef.createEmbeddedView(this.templateRef);
      } else {
        this.vcRef.clear();
      }
    },
      1000);

      setTimeout(() => {
        this.visible = !this.visible;
        console.log(this.visible)
        if (!this.visible) {
          this.vcRef.createEmbeddedView(this.templateRef);
        } else {
          this.vcRef.clear();
        }
      },
        2000);
    }
}
