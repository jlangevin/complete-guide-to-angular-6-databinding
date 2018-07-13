import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'app-cockpit',
	templateUrl: './cockpit.component.html',
	styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
	@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
	// You can also use aliases for output emitters. 'bpCreated' is now what we reference for this event outside this component instead of 'blueprintCreated'
	@Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();;
	// newServerName = '';
	// newServerContent = '';
	@ViewChild('serverContentInput') serverContentInput: ElementRef;

	constructor() { }

	ngOnInit() {
	}

	onAddServer(nameInput: HTMLInputElement) {
		console.log(this.serverContentInput);
		this.serverCreated.emit({
			serverName: nameInput.value,
			serverContent: this.serverContentInput.nativeElement.value
		});
	}

	onAddBlueprint(nameInput: HTMLInputElement) {
		this.blueprintCreated.emit({
			serverName: nameInput.value,
			serverContent: this.serverContentInput.nativeElement.value
		});
	}
}
