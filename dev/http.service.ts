import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable()
export class HTTPService{
	constructor(private http:Http){

	}
<<<<<<< HEAD

	getQuery(){
		return this.http.get("http://localhost:3000/visit").map(res => res.json());
	}
=======
	getQuery(){
		return this.http.get("http://www.localhost:3002/visit").map(res => res.json());
	}
	getEQuery(){
		return this.http.get("http://www.localhost:3002/equipment").map(res => res.json());
	}
	getPQuery(){
		return this.http.get("http://www.localhost:3002/patient").map(res => res.json());
	}
	getSQuery(){
		return this.http.get("http://www.localhost:3002/staff").map(res => res.json());
	}
	postPQuery(){
		return this.http.post("http://www.localhost:3002/patient", JSON.stringify({"id": 1, "name": "Новые"}),{headers:headers}).map(res => res.json());
	}


>>>>>>> ac10ee06669a4363b67d96c92be35b4890af3b4f
}