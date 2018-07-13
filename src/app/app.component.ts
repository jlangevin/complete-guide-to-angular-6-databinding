import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	serverElements = [{ type: 'server', name: 'Test Server', content: 'Just a test' }];
	numbers = {
		odd: [],
		even: []
	};

	onServerAdded(serverData: {serverName: string, serverContent: string}) {
		this.serverElements.push({
			type: 'server',
			name: serverData.serverName,
			content: serverData.serverContent
		});
	}

	onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
		this.serverElements.push({
			type: 'blueprint',
			name: blueprintData.serverName,
			content: blueprintData.serverContent
		});
	}

	onChangeFirst() {
		this.serverElements[0].name = 'Changed!';
	}

	onDestroyFirst() {
		this.serverElements.splice(0, 1);
	}

	onEvenEmitted(eventData: {num: number}) {
		console.log('even:', eventData);
		this.numbers.even.push(eventData.num);
	}

	onOddEmitted(eventData: {num: number}) {
		console.log('odd:', eventData);
		this.numbers.odd.push(eventData.num);
	}

}
