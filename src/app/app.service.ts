import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Name } from './models/names.model';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AppService {

	data = [
		{
			'id': 1,
			'name': 'John'
		},
		{
			'id': 2,
			'name': 'William'
		},
		{
			'id': 3,
			'name': 'Olivia'
		},
		{
			'id': 4,
			'name': 'Mia'
		},
		{
			'id': 5,
			'name': 'Benjamin'
		},
		{
			'id': 6,
			'name': 'Michael'
		},
		{
			'id': 7,
			'name': 'Emily'
		},
		{
			'id': 8,
			'name': 'Liam'
		},
		{
			'id': 9,
			'name': 'Isabella'
		},
		{
			'id': 10,
			'name': 'John'
		}
	];


	constructor(
		private http: HttpClient,
	) { }

	getNames() {
		// return this.http.get<Array<Name>>('assets/names.json').pipe(
		// for stackblitz.com
		return new Observable<Array<Name>>(obs => obs.next(this.data)).pipe(
			map(names => {
				const result = {};
				names.forEach(item => result[item.id] = {name: item.name});
				return result;
			})
		);
	}

}
