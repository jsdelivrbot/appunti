import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {
    @Input() set unless(condition: boolean) {
        if (!condition) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainerRef.clear();
        }
    }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}
