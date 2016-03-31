import {Http,Headers} from 'angular2/http';
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
    
    post(){
        var json = JSON.stringify({eid:105, type:'TV', room:10});
        var key = "json=";
        var param = key + json;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        console.log("sending post request");
        return this.http.post('http://localhost:3002/equipment', param, {headers: headers})
        .map(res=>res.json());
    }
}