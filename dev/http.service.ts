import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable()
export class HTTPService {
	constructor(private http:Http) {

	}

	getQuery() {
		return this.http.get("http://www.localhost:3002/visit").map(res => res.json());
	}

	getEQuery() {
		return this.http.get("http://www.localhost:3002/equipment").map(res => res.json());
	}

	getPQuery() {
		return this.http.get("http://www.localhost:3002/patient").map(res => res.json());
	}

	getSQuery() {
		return this.http.get("http://www.localhost:3002/staff").map(res => res.json());
	}

	postPQuery() {
		return this.http.post("http://www.localhost:3002/patient",
			JSON.stringify({
				"pid": 1,
				"p_lname": "Новые",
				"p_fname": "sdsds",
				"is_male": "yes",
				"dob": "234234"
			}), {}).map(res => res.json());
	}
}