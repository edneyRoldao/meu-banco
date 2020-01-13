import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

export enum Position {
    TOP_LEFT,
    TOP_RIGHT,
    BOTTOM_LEFT,
    BOTTOM_RIGHT
}

export class InputLimiterCustomConfig {
    maxLength ? = 100;
    warningMessage ? = 'Limite máximo de caracteres atingido';
    counterPosition ?: Position = Position.BOTTOM_RIGHT;
    addCssClassCounter ?: string[];
    addCssClassWaningMessage ?: string[];
    warningMessagePosition ?: Position = Position.BOTTOM_LEFT;
}

@Directive({
    selector: '[inputLimiter]'
})
export class InputLimiterDirective implements OnInit {

    @Input()
    inputLimiter: InputLimiterCustomConfig;

    mainDivElement: any;
    counterElement: any;
    warningMessageElement: any;
    counterElementContent: any;
    warningMessageElementContent: any;
    isWarningMessageDisplayed: boolean;

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.isWarningMessageDisplayed = false;
        this.inputLimiter = Object.assign(new InputLimiterCustomConfig(), this.inputLimiter);

        this.counterElement = this.renderer.createElement('div');
        this.counterElementContent = this.renderer.createText(`0 / ${this.inputLimiter.maxLength}`);
        this.renderer.appendChild(this.counterElement, this.counterElementContent);

        this.warningMessageElement = this.renderer.createElement('div');
        this.warningMessageElementContent = this.renderer.createText(this.inputLimiter.warningMessage);

        this.applyCssOnCounter();
        this.applyCssOnWarningMessage();
        this.setContentPosition(this.inputLimiter.counterPosition, this.inputLimiter.warningMessagePosition);
    }

    @HostListener('input', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        const input  = event.target as HTMLInputElement;
        input.value = input.value.substring(0, this.inputLimiter.maxLength);

        if (input.value.length === this.inputLimiter.maxLength && !this.isWarningMessageDisplayed) {
            this.renderer.setStyle(this.counterElement, 'color', '#F50057');
            this.renderer.appendChild(this.warningMessageElement, this.warningMessageElementContent);
            this.isWarningMessageDisplayed = true;
        }

        if (input.value.length < this.inputLimiter.maxLength && this.isWarningMessageDisplayed) {
            this.renderer.setStyle(this.counterElement, 'color', 'inherit');
            this.renderer.removeChild(this.warningMessageElement, this.warningMessageElementContent);
            this.isWarningMessageDisplayed = false;
        }

        this.renderer.setProperty(this.counterElement, 'innerHTML', `${input.value.length} / ${this.inputLimiter.maxLength}`);
    }

    private setContentPosition(cp: Position, mp: Position): void {
        const parent = this.element.nativeElement.parentNode;

        if (cp === Position.BOTTOM_RIGHT && mp === Position.BOTTOM_LEFT) {
            this.createMainDiv('RIGHT');
            this.renderer.addClass(this.mainDivElement, 'justify-content-between');
            this.renderer.appendChild(parent, this.mainDivElement);
            return;
        }

        if (cp === Position.BOTTOM_RIGHT && mp === Position.BOTTOM_RIGHT) {
            this.createMainDiv('RIGHT');
            this.renderer.addClass(this.mainDivElement, 'justify-content-end');
            this.renderer.addClass(this.warningMessageElement, 'mr-4');
            this.renderer.appendChild(parent, this.mainDivElement);
            return;
        }

        if (cp === Position.BOTTOM_LEFT && mp === Position.BOTTOM_RIGHT) {
            this.createMainDiv('LEFT');
            this.renderer.addClass(this.mainDivElement, 'justify-content-between');
            this.renderer.appendChild(parent, this.mainDivElement);
            return;
        }

        if (cp === Position.BOTTOM_LEFT && mp === Position.BOTTOM_LEFT) {
            this.createMainDiv('LEFT');
            this.renderer.addClass(this.mainDivElement, 'justify-content-start');
            this.renderer.addClass(this.warningMessageElement, 'ml-4');
            this.renderer.appendChild(parent, this.mainDivElement);
            return;
        }

        if (cp === Position.BOTTOM_RIGHT && mp === Position.TOP_RIGHT) {
            this.renderer.setProperty(this.counterElement, 'align', 'right');
            this.renderer.appendChild(parent, this.counterElement);
            this.renderer.setProperty(this.warningMessageElement, 'align', 'right');
            this.renderer.insertBefore(parent, this.warningMessageElement, this.element.nativeElement);
            return;
        }

        if (cp === Position.TOP_RIGHT && mp === Position.BOTTOM_RIGHT) {
            this.renderer.setProperty(this.counterElement, 'align', 'right');
            this.renderer.insertBefore(parent, this.counterElement, this.element.nativeElement);
            this.renderer.setProperty(this.warningMessageElement, 'align', 'right');
            this.renderer.appendChild(parent, this.warningMessageElement);
            return;
        }

        if (cp === Position.BOTTOM_LEFT && mp === Position.TOP_LEFT) {
            this.renderer.setProperty(this.counterElement, 'align', 'left');
            this.renderer.appendChild(parent, this.counterElement);
            this.renderer.setProperty(this.warningMessageElement, 'align', 'left');
            this.renderer.insertBefore(parent, this.warningMessageElement, this.element.nativeElement);
            return;

        }

        if (cp === Position.TOP_LEFT && mp === Position.BOTTOM_LEFT) {
            this.renderer.setProperty(this.counterElement, 'align', 'left');
            this.renderer.insertBefore(parent, this.counterElement, this.element.nativeElement);
            this.renderer.setProperty(this.warningMessageElement, 'align', 'left');
            this.renderer.appendChild(parent, this.warningMessageElement);
            return;
        }

        if (cp === Position.TOP_RIGHT && mp === Position.TOP_LEFT) {
            this.createMainDiv('RIGHT');
            this.renderer.addClass(this.mainDivElement, 'justify-content-between');
            this.renderer.insertBefore(parent, this.mainDivElement, this.element.nativeElement);
            return;
        }

        if (cp === Position.TOP_RIGHT && mp === Position.TOP_RIGHT) {
            this.createMainDiv('RIGHT');
            this.renderer.addClass(this.mainDivElement, 'justify-content-end');
            this.renderer.addClass(this.warningMessageElement, 'mr-4');
            this.renderer.insertBefore(parent, this.mainDivElement, this.element.nativeElement);
            return;
        }

        if (cp === Position.TOP_LEFT && mp === Position.TOP_RIGHT) {
            this.createMainDiv('LEFT');
            this.renderer.addClass(this.mainDivElement, 'justify-content-between');
            this.renderer.insertBefore(parent, this.mainDivElement, this.element.nativeElement);
            return;
        }

        if (cp === Position.TOP_LEFT && mp === Position.TOP_LEFT) {
            this.createMainDiv('LEFT');
            this.renderer.addClass(this.mainDivElement, 'justify-content-start');
            this.renderer.addClass(this.warningMessageElement, 'ml-4');
            this.renderer.insertBefore(parent, this.mainDivElement, this.element.nativeElement);
            return;
        }

        if (cp === Position.TOP_LEFT && mp === Position.BOTTOM_RIGHT) {
            this.renderer.setProperty(this.counterElement, 'align', 'left');
            this.renderer.insertBefore(parent, this.counterElement, this.element.nativeElement);
            this.renderer.setProperty(this.warningMessageElement, 'align', 'right');
            this.renderer.appendChild(parent, this.warningMessageElement);
            return;
        }

        if (cp === Position.BOTTOM_RIGHT && mp === Position.TOP_LEFT) {
            this.renderer.setProperty(this.counterElement, 'align', 'right');
            this.renderer.appendChild(parent, this.counterElement);
            this.renderer.setProperty(this.warningMessageElement, 'align', 'left');
            this.renderer.insertBefore(parent, this.warningMessageElement, this.element.nativeElement);
            return;
        }

        if (cp === Position.BOTTOM_LEFT && mp === Position.TOP_RIGHT) {
            this.renderer.setProperty(this.counterElement, 'align', 'left');
            this.renderer.appendChild(parent, this.counterElement);
            this.renderer.setProperty(this.warningMessageElement, 'align', 'right');
            this.renderer.insertBefore(parent, this.warningMessageElement, this.element.nativeElement);
            return;
        }

        if (cp === Position.TOP_RIGHT && mp === Position.BOTTOM_LEFT) {
            this.renderer.setProperty(this.counterElement, 'align', 'right');
            this.renderer.insertBefore(parent, this.counterElement, this.element.nativeElement);
            this.renderer.setProperty(this.warningMessageElement, 'align', 'left');
            this.renderer.appendChild(parent, this.warningMessageElement);
            return;
        }

    }

    private createMainDiv(counterPosition: 'RIGHT' | 'LEFT'): void {
        this.mainDivElement = this.renderer.createElement('div');

        if (counterPosition === 'LEFT') {
            this.renderer.appendChild(this.mainDivElement, this.counterElement);
            this.renderer.appendChild(this.mainDivElement, this.warningMessageElement);

        } else {
            this.renderer.appendChild(this.mainDivElement, this.warningMessageElement);
            this.renderer.appendChild(this.mainDivElement, this.counterElement);
        }

        this.renderer.addClass(this.mainDivElement, 'd-flex');
    }

    private applyCssOnCounter(): void {
        if (this.inputLimiter.addCssClassCounter) {
            this.inputLimiter.addCssClassCounter.forEach(cssClass => this.renderer.addClass(this.counterElement, cssClass));

        } else {
            this.renderer.setStyle(this.counterElement, 'font', '400 75% Roboto,"Helvetica Neue",sans-serif');
        }
    }

    private applyCssOnWarningMessage(): void {
        if (this.inputLimiter.addCssClassWaningMessage) {
            this.inputLimiter.addCssClassWaningMessage.forEach(cssClass => this.renderer.addClass(this.warningMessageElement, cssClass));

        } else {
            this.renderer.setStyle(this.warningMessageElement, 'color', '#F50057');
            this.renderer.setStyle(this.warningMessageElement, 'font', '400 75% Roboto,"Helvetica Neue",sans-serif');
        }
    }

}
