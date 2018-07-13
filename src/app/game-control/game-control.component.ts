import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
	@Output() evenEmitted = new EventEmitter<{num: number}>();
	@Output() oddEmitted = new EventEmitter<{num: number}>();

	timer = null;
	currentNum = 0;

	constructor() { }

	ngOnInit() {
	}

	isEven(num) {
		return (num % 2) === 0;
	}

	emitNumber() {
		this.currentNum = this.currentNum + 1;
		console.log('this.currentNum:', this.currentNum);
		if (this.isEven(this.currentNum)) {
			this.evenEmitted.emit({
				num: this.currentNum
			});
		} else {
			this.oddEmitted.emit({
				num: this.currentNum
			});
		}
	}

	onStartTimer() {
		if ( this.timer === null ) {
			this.timer = setInterval(
				() => this.emitNumber()
			, 1000);
		} else {
			console.log('timer already started!');
		}
	}

	onStopTimer() {
		clearInterval(this.timer);
		this.timer = null;
	}

	onResetNum() {
		this.currentNum = 0;
	}

}
