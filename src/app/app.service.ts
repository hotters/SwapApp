import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Name } from './models/names.model';

import { map } from 'rxjs/operators';


@Injectable()
export class AppService {

	constructor(
		private http: HttpClient,
	) { }

	getNames() {
		return this.http.get('assets/names.json')
		.pipe(
			map(names => {
				const result = {};
				names.forEach(item => result[item.id] = {name: item.name});
				result.keys = Object.keys(result);
				return result;
			})
		)
		;
	}

}
