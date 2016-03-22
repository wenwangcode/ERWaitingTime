import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable()
export class HTTPService{
	constructor(private http:Http){

	}

	getQuery(){
		return this.http.get("http://localhost:3002/visit").map(res => res.json());
	}
}