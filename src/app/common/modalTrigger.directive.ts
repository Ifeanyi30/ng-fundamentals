import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core";

import { JQ_TOKEN } from "./jQuery.service";



@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

    el!: HTMLElement
    @Input('modal-trigger') modalId!: string
    
    constructor(private ref: ElementRef, @Inject(JQ_TOKEN) private $: any){
        this.el = ref.nativeElement
    }
    
    ngOnInit() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({})
        })
    }

}