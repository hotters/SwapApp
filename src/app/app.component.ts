import { Component, OnInit } from '@angular/core';
import { Name } from './models/names.model';
import { AppService } from './app.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

	firstList = {};
	firstListKeys = [];

	secondList = {};
	secondListKeys = [];

	constructor(
		private service: AppService,
	) {


	}

	ngOnInit() {
		this.service.getNames().subscribe(names => {
			this.firstList = names;
			this.firstListKeys = Object.keys(this.firstList);
			console.log(this.firstList, this.firstListKeys);
		});
	}

	toLeft() {
		this.secondListKeys.forEach(i => {
			if (this.secondList[i].selected) {
				this.firstList[i] = this.secondList[i];
				this.firstList[i].selected = false;
				delete this.secondList[i];
				this.firstListKeys.push(i);
			}
		});
		this.secondListKeys = Object.keys(this.secondList);
	}

	toRight() {
		this.firstListKeys.forEach(i => {
			if (this.firstList[i].selected) {
				this.secondList[i] = this.firstList[i];
				this.secondList[i].selected = false;
				delete this.firstList[i];
				this.secondListKeys.push(i);
			}
		});
		this.firstListKeys = Object.keys(this.firstList);
		// console.log('[TO RIGHT]', this.firstList, this.secondList, this.secondListKeys);
	}

	selectItem(id: string, type: number) {
		switch (type) {
			case 1:
				this.firstList[id].selected = this.firstList[id].selected ? false : true;
				break;
			case 2:
				this.secondList[id].selected = this.secondList[id].selected ? false : true;
				break;
		}
	}

	filter(value: string, type: number) {
		console.log(value, type);
		switch (type) {
			case 1:
				break;

			case 2:
				break;
		}
	}

}
