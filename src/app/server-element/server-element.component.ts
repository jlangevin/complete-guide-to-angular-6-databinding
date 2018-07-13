import { 
	Component,
	DoCheck,
	Input, 
	OnChanges, 
	OnInit,
	SimpleChanges,
	ViewEncapsulation,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy,
	ViewChild,
	ContentChild,
	ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated /* Other options: None, Native */
})
export class ServerElementComponent implements 
	OnInit, 
	OnChanges, 
	DoCheck, 
	AfterContentInit, 
	AfterContentChecked, 
	AfterViewInit, 
	AfterViewChecked,
	OnDestroy
{
	// @Input makes this element accessible outside this component and therefore bindable in the app component
	// 'srvElement' below is an alias accessible outside this component.  Once you assign an alias, you can no longer
	// reference this as 'element', you must use srvElement in our app component.
	@Input('srvElement') element:  { type: string, name: string, content: string }
	@Input() name: string;
	@ViewChild('heading') header: ElementRef;
	@ContentChild('contentParagraph') paragraph: ElementRef;

	constructor() {
		console.log('constructor called');
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log('ngOnChanges called');
		console.log(changes);
	}

	ngOnInit() {
		console.log('ngOnInit called');
		console.log('header textContent:', this.header.nativeElement.textContent);
		console.log('paragraph textContent:', this.paragraph.nativeElement.textContent);
	}

	ngDoCheck() {
		console.log('ngDoCheck called');
	}

	ngAfterContentInit() {
		console.log('ngAfterContentInit called');
		console.log('paragraph textContent:', this.paragraph.nativeElement.textContent);
	}
	
	ngAfterContentChecked() {
		console.log('ngAfterContentChecked called');
	}

	ngAfterViewInit() {
		console.log('ngAfterViewInit called');
		console.log('header textContent:', this.header.nativeElement.textContent);
	}
	
	ngAfterViewChecked() {
		console.log('ngAfterViewChecked called');
	}

	ngOnDestroy() {
		console.log('ngOnDestroy called');
	}

}
