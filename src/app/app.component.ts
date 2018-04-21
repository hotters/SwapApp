import { Component, OnInit } from '@angular/core';
import { Name, Names } from './models/names.model';
import { AppService } from './app.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

	firstList: Object = {};
	secondList: Object = {};

	constructor(
		private service: AppService,
	) {


	}

	ngOnInit() {
		this.service.getNames().subscribe(names => {
			this.firstList = names;
			console.log(this.firstList);
		});
	}

	toLeft() {

	}

	toRight() {

	}

	selectItem(id) {
		console.log('SELECT', id);
		this.firstList[id].selected = this.firstList[id].selected ? false : true;
	}
}
